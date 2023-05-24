import React from 'react'
import { TextField, Typography,Button } from '@mui/material';
const First = () => {
  return (
    <div>
      <h1>Nikhil S</h1>
      <input placeholder='Name'/>
      <br/>
      <input type='password' placeholder='password'/>
      <br/>
      <button>Submit</button>
      <br/>
      <Typography varient='h1'>Nikhil S</Typography>
      <br/>
      <TextField variant='outlined' label='Name'></TextField>
      <br/>
      <TextField variant='standard' label='Name'></TextField>
      <br/>
      <TextField variant='filled' label='name'></TextField>
      <br/><br/>
      <Button variant='contained'>submit</Button>

    </div>
  )
}

export default First
