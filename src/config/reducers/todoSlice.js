import { createSlice, nanoid } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todo: [],
    },
    reducers: {
        addtodo: (state , action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deleteTodo: (state , action) => {
            state.todo.splice(action.payload.index , 1)
        },
        updateTodo: (state, action) => {
            const { index, newTitle } = action.payload;
            state.todo[index].title = newTitle;
          },
    }
})


export const { addtodo , deleteTodo , updateTodo } = todoSlice.actions
export default todoSlice.reducer