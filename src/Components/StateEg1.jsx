import {  Button, Typography,TextField } from '@mui/material';
import React, { useState } from 'react'


const StateEg1 = () => {
    var [pname,setPname] = useState("");
    var[val,setVal] = useState()

    const inputHandler =(e)=>{
        setPname(e.target.value);
        console.log(val)
    }
    const changeName =()=>{
        setPname(val)
    }
  return (
    <div>
      <Typography variant='h4'>hello {pname}</Typography>
      <TextField variant='outlined' value={val} label='Name' onChange={inputHandler}/><br/><br/>
      <Button variant='contained'onClick={changeName} >Change</Button>
    </div>
  )
}

export default StateEg1
