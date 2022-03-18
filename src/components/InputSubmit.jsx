import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateValue } from '../reduxSlices/todoSlice';



const InputSubmit = () => {

    const inputValue = useSelector((state) => state.todo.inputValue);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const inputValue = e.target.value
        dispatch(updateValue(inputValue));
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!inputValue) return

        const task = {
            id: Date.now(),
            taskName: inputValue
        }
        dispatch(addTodo(task));
        dispatch(updateValue(""));
    }


    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" className='mr-3 border border-gray-300 rounded py-2 px-3 flex-1' onChange={(e) => handleChange(e)} value={inputValue} />
            <button type="submit" className='py-2 px-6 bg-purple-600 text-white text-lg rounded cursor-pointer hover:bg-purple-700  
             transition-all'>Submit</button>
        </form>
    )
}

export default InputSubmit
