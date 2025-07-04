import React, { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [msg, setMsg] = useState("");

  function saveTodo() {
    if (msg.trim() === "") return; // prevent empty input
    setTodo([...todo, msg.trim()]);
    setMsg("");
  }


  const delTodo = (index) =>{
    setTodo(todo.filter((e, i) => i !== index));
  }
  return (
    <div>
      <input type="text" onChange={(e) => setMsg(e.target.value)} value={msg}/>
      <button onClick={saveTodo}>Save</button>
      <br />
      {todo.map((e,i)=>{
        return <li>{e} <button onClick={() => delTodo(i)}>ลบ</button></li>
      })}
    </div>
    
  )
}

export default App