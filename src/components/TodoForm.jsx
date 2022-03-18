import React from 'react'
import InputSubmit from './InputSubmit'
import TodoList from './TodoList'

const TodoForm = () => {
    return (
        <div className='max-w-xl w-full mx-auto p-8 bg-white shadow-md rounded-lg'>
            <h2 className='text-lg text-center font-medium mb-4'>Todo List</h2>
            <InputSubmit />
            <TodoList />
        </div>
    )
}

export default TodoForm
