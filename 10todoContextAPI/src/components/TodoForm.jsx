import React from 'react'
import { useState } from 'react';
import { UseTodo } from '../context';

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const {addTodo} = UseTodo()

    const add = (e) =>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed:false}) // addTodo( {}) passed object as we have read all the previous values insid the AddTodo function 
        // can be written as add({id:Date.now(), todo:todo, completed:false})
        setTodo("")
    }


    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;