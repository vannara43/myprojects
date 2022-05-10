import React, { useState } from 'react'

function InputTodo() {

const [description, setDescription] = useState("");

const onChangeHandle = (e) => {
  setDescription(e.target.value)
}

const onSubmitForm = async(e) => {
  e.preventDefault();
  try {
    const body = {description};
    const response = await fetch("https://mysitedatabase.herokuapp.com/api/todos", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    false&&console.log(response)
    window.location = window.location.pathname;
  } catch (error) {
    console.error(error.message)
  }
}

  return (
    <div>
      <h3>Input Todo</h3>
    
    <form className='d-flex mt-5' onSubmit={onSubmitForm}>
      <input type="text" className="form-control" value={description}
       onChange={onChangeHandle}
      //  onChange={(e)=> setDescription(e.target.value)}
       />
      <button className='btn btn-success'>Submit</button>
    </form>

    State: {JSON.stringify(description)}
    </div>
  )
}

export default InputTodo