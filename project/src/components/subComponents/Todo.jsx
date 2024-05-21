import React, { useState } from 'react'
import {useTodo} from '../../contexts/TodoContext.js'

function Todo({todo}) {

  const {updateTodo, toggleComplete, deleteTodo} = useTodo();
  const [todoContent, setTodoContent] = useState(todo.todoContent);
  const [isEditable, setIsEditable] = useState(false);

  const updateCurrenTodo = () => {
    updateTodo({...todo, todoContent});
    setIsEditable(false);
  }

  const toggleChecked = () => {
    toggleComplete(todo.id);
  }



  return (
    <div className= {` ${todo.completed ? "opacity-50" : "opacity-100"} transition-all ease-in-out duration-200 w-full flex items-center justify-center shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)] h-[65px] rounded-md p-2`}>
      
      <input 
        type='checkbox'
        className='mr-2 ml-2 h-[20px] w-[20px]'
        onChange={toggleChecked}
        checked={todo.completed}
      />
    
      <input 
        type='text'
        className={`ml-4 text-lg font-semibold border outline-none bg-transparent h-full pl-2 w-[80%] ${
                  isEditable ? "dark:border-white/10 2px border-black/10 2px" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
        readOnly={!isEditable}
        value={todoContent}
        onChange={(e) => {setTodoContent(e.target.value)}}
      />

      <button 
        onClick={() => {

          if(isEditable) updateCurrenTodo();
          else setIsEditable((prev) => !prev)

        }}
        disabled={todo.completed}
        className='ml-4 mr-4 scale-125'
      >
        {isEditable === true ? "📁" : "✏️"}
      </button>

      <button
        onClick={() => { deleteTodo(todo.id); }}
        className='ml-4 mr-4 scale-125'
      >
        ❌
      </button>

    </div>
  )
}

export default Todo