import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,Provider } from 'react-redux'
import Container from '@mui/material/Container';
import {store} from '../store/Store'
import { Button, TextField } from '@mui/material';
import { addTodo } from '../store/todoSlice';


export default function AddTODO() {
  
  const dispatch = useDispatch();

  const [initialInput, setInitialInput] = useState()

  const onSubmitHandler = (e) => {
    
     dispatch(addTodo(initialInput))

    console.log("The entered value is ",initialInput);
  
  }


  return (
    <>
    <Container maxWidth="sm">
      

      <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={(e) => setInitialInput(e.target.value)}/>

      <Button variant="contained" onClick={onSubmitHandler}>Submit</Button>

    </Container>

    </>
  )
}
