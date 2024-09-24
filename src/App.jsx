import { Box, Button  } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deleteTodo , updateTodo  } from './config/reducers/todoSlice';

const App = () => {

  const todoVal = useRef();

  // DISPATCH METHOD : kahin s data bhejna
   const dispatch = useDispatch();

  //  SELECTOR METHOD: kahin s data magwana

  const selector = useSelector( state => state.todos.todo);
  console.log(selector);


  const addTodoInFile = (event) => {
    event.preventDefault();
    console.log( "TODO ADDED" ,  todoVal.current.value);
    dispatch(addtodo({
      title: todoVal.current.value
    }))
    

  }
  const removeTodoInFile = (index) => {
    console.log( "TODO DELETED" , index);
    dispatch(deleteTodo({
    index
    }))
    
  }

  const editTodoInFile = (index) => {
    const currentTitle = selector[index].title;
    const newTitle = prompt('EDIT TODO:', currentTitle);

    if (newTitle !== null && newTitle.trim() !== '') {
      dispatch(updateTodo({ index, newTitle }));
    }
  };


  


  return (
    <>
    <h1 style={{
      textAlign: "center",
      marginTop: "10px",
    }}>TODO APP USING REDUX</h1>
    
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      
    >
      <input
        placeholder ="Enter text" ref={todoVal}
        variant="outlined"
        style={{ marginBottom: "20px", width: "300px", padding: "10px" }}
      />
      <Button onClick={addTodoInFile} variant="contained" color="primary">
      Add Todo
      </Button>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop= "-20px"
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {selector.length > 0 ? (
          selector.map((item, index) => {
            return (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                {item.title}
                <Button
                  onClick={() => removeTodoInFile(index)}
                  variant="contained"
                  color="error"
                  style={{ marginLeft: "10px" }}
                >
                  Delete Todo
                </Button>
                <Button
                onClick={() => editTodoInFile(index)}
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  Edit Todo
                </Button>
              </li>
            );
          })
        ) : (
          <h1>Data Not Found!</h1>
        )}
      </ul>
    </Box>
    </>
  )
}

export default App