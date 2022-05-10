const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

// const port = 3306

//ROUTES
//create
app.post("/todos", async(req, res)=>{
    try {
        const {description} = req.body;
        const newData = await pool.query("INSERT INTO datatable(description) VALUES($1) RETURNING * ",[description]);
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all
app.get("/todos", async(req,res)=>{
    try {
        const allDatas = await pool.query("SELECT * FROM datatable");
        res.json(allDatas.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get id
app.get("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await pool.query("SELECT * FROM datatable WHERE data_id = $1", [id])
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update
app.put("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateData = await pool.query("UPDATE datatable SET description = $1 WHERE data_id = $2",[description, id]);
        res.json("dataTable was updated");
    } catch (err) {
        console.error(err.message);
    }
})

//delete
app.delete("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteData = await pool.query("DELETE FROM datatable WHERE data_id = $1", [id]);
        res.json("Data is deleted");
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(process.env.port || 5000, ()=>{
    console.log("server has started on port: 5000");
})