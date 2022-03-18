import React from 'react'
import { MdDelete } from 'react-icons/md';

const TodoList = () => {
    return (
        <ul className='mt-3'>
            <li className='flex content-center bg-gray-100 rounded py-3 px-4 items-center mb-1'> <p className='text-black flex-1 mr-4'>This is the task</p> <button className="text-white bg-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition"><MdDelete /></button></li>

        </ul>
    )
}

export default TodoList
