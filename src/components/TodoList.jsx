import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../reduxSlices/todoSlice';



const TodoList = () => {

    const todoList = useSelector((state) => state.todo.todoList);
    const dispatch = useDispatch();

    const hadleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <ul className='mt-3 max-h-72 overflow-auto'>
            {
                todoList && (
                    todoList.map(task => {
                        return (
                            <li key={task.id} className='flex content-center bg-gray-100 rounded py-3 px-4 items-center mb-1'> <p className='text-black flex-1 mr-4'>{task.taskName}</p> <button className="text-white bg-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition" onClick={() => hadleDelete(task.id)}><MdDelete /></button></li>
                        )
                    })
                )
            }


        </ul>
    )
}

export default TodoList
