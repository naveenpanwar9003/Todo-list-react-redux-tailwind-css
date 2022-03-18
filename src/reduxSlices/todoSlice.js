import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue: "",
    todoList: []
}

export const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            state.inputValue = action.payload;
        },
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todoList.splice(state.todoList.findIndex((task) => task.id === action.payload.id), 1);
        }
    }
});

export const { addTodo, removeTodo, updateValue } = todoListSlice.actions;
export default todoListSlice.reducer