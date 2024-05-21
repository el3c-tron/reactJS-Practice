import React, { useState } from 'react'
import {useTodo} from '../../contexts/TodoContext.js';

function TodoForm() {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const addingTodo = (e) => {

        e.preventDefault();

        if(!todo) return;

        const newTodo = {
            todoContent: todo,
            completed: false
        }

        addTodo(newTodo);
        setTodo("");
    };

    return (
        <>
            <form
                className='w-full mt-4 p-2 flex justify-center' 
                onSubmit={addingTodo}
            >
                
                <input 
                    className='dark:bg-gray-700 w-[700px] rounded-md p-2 outline-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)]'
                    type="text"
                    placeholder='Todo . . .'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button type='submit' className='w-[100px] ml-4 rounded-md text-white pl-2 pr-2 font-semibold bg-blue-600 hover:bg-blue-500 transition-all duration-400 dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)]'>
                    Add
                </button>

            </form>

        </>
    )
}

export default TodoForm