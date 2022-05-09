import React,{Fragment} from 'react'
import InputTodo from "./InputTodo";
import ListTodos from './ListTodos';


function MainTodo() {
  return (
    <Fragment>
      <h1>
        Main Display
      </h1>

      <div>
        <InputTodo/>
        <ListTodos/>
      </div>



    </Fragment>
  )
}

export default MainTodo