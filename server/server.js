const express = require("express");
const cors = require("cors")
const pool = require("./db");
const app = express();
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json()); //req.body


//ROUTES

//-------------MySQL---------------

//create
app.post("/todos", async(req, res)=>{
    const body = req.body.description;
    console.log(body);
    pool.query(`INSERT INTO datatable (description) VALUES ("${body}")`,(err, result)=>{
        if (err) {
           console.error(err);
       } else{
       res.send(result);
       }
    });
})


//get all

app.get("/todos", async(req,res)=>{
        pool.query(`SELECT * FROM datatable`,(err, result)=>{
            if (err) {
               console.error(err);
           }
           res.send(result);
        });
});

//get id
app.get("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const data = await pool.query(`SELECT * FROM datatable WHERE data_id = ?`, [id])
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
        const updateData = await pool.query(`UPDATE datatable SET description = ? WHERE data_id = ?`,[description, id]);
        false && console.log(updateData);
        res.json("dataTable was updated");
    } catch (err) {
        console.error(err.message);
    }
});

//delete
app.delete("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteData = await pool.query(`DELETE FROM datatable WHERE data_id = ?`, [id]);
        res.json("Data is deleted");
    } catch (err) {
        console.error(err.message)
    }
});
//-------------MySQL-END-----------

//------------postgresSQL-------------
//create
// app.post("/todos", async(req, res)=>{
//     try {
//         const {description} = req.body;
//         const newData = await pool.query(`INSERT INTO datatable(description) VALUES($1)`,[description]);
//         res.json(newData.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//get all
// app.get("/todos", async(req,res)=>{
//     try {
//         const allDatas = await pool.query(`SELECT * FROM datatable`);
//         res.json(allDatas.rows);
//         console.log(allDatas);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//get id
// app.get("/todos/:id", async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const data = await pool.query("SELECT * FROM datatable WHERE data_id = $1", [id])
//         res.json(data.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//update
// app.put("/todos/:id", async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const {description} = req.body;
//         const updateData = await pool.query("UPDATE datatable SET description = $1 WHERE data_id = $2",[description, id]);
//         false && console.log(updateData);
//         res.json("dataTable was updated");
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//delete
// app.delete("/todos/:id", async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const deleteData = await pool.query("DELETE FROM datatable WHERE data_id = $1", [id]);
//         res.json("Data is deleted");
//     } catch (err) {
//         console.error(err.message)
//     }
// })
//------------postgresSQL-END---------

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`server has started on port: ${process.env.PORT}`);
})