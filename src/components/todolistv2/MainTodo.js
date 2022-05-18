import React, { Fragment } from 'react'
import InputTodo from "./InputTodo";
import ListTodos from './ListTodos';


function MainTodo() {
  return (
    <Fragment>
      <div className='container bg-light text-dark'>
        <h1>
          Main Display
        </h1>

        <div >
          <InputTodo />
          <ListTodos />
        </div>
      </div>



    </Fragment>
  )
}

export default MainTodo