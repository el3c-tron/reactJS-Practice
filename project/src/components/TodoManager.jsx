import React, { useEffect, useState } from 'react'
import { TodoProvider } from "../contexts/TodoContext.js";
import Todo from './subComponents/Todo.jsx';
import TodoForm from './subComponents/TodoForm.jsx';

function TodoManager() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
        // console.log(todos.length);
    };

    const deleteTodo = (id) => {
        setTodos( (previous) => 
            previous.filter((prevTodo) => prevTodo.id !== id)
        )
    };

    const updateTodo = (todo, id) => {
        setTodos( (previous) => 
            previous.map((prevTodo) => (
                (prevTodo.id === id) ? todo : prevTodo
            ))
        )
    };

    const toggleComplete = (id) => {
        setTodos( (previous) => 
            previous.map( (prevTodo) => (
                (prevTodo.id === id) ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
            ) )
        )
    };

    useEffect(() => {
        const localStorageTodos = JSON.parse(localStorage.getItem("todos"))

        if (localStorageTodos && localStorageTodos.length > 0)
            setTodos(localStorageTodos)

    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>

            <div className='mt-8 flex justify-center flex-col items-center p-4 shadow-[0px_0px_15px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)] rounded-lg w-[60rem]'>

                <h1 className=' p-2 text-lg font-semibold'>Todo Manager</h1>

                <TodoForm />

                <div className='w-full flex flex-col justify-center items-center mt-4'>
                    
                    {
                        todos.map((todo) => (
                          <div key={todo.id} className=' flex justify-between items-center mt-2 mb-2 h-auto w-[88%]'>
                            <Todo todo={todo} />
                          </div>
                        ))
                    }

                </div>

            </div>
        
        </TodoProvider>
    )
}

export default TodoManager