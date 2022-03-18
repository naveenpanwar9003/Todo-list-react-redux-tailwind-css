import React from 'react'

const InputSubmit = () => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <form className="flex">
            <input type="text" className='mr-3 border border-gray-300 rounded py-2 px-3 flex-1' onChange={(e) => handleChange(e)} />
            <button type="submit" className='py-2 px-6 bg-purple-600 text-white text-lg rounded cursor-pointer hover:bg-purple-700  
             transition-all'>Submit</button>
        </form>
    )
}

export default InputSubmit
