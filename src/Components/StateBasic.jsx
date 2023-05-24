import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    var [hname,setHname]=useState("Nikhil");
    const changeHname =()=>{
        setHname("Home Page")
    }
     const changeGname=()=>{
        setHname("Gallery Page")
     } 
     const changeCname=()=>{
        setHname("Contacts")
     }    
  return (
    <div >
      <Typography variant='h4'>hello {hname}</Typography> 
      <Button variant='contained'onClick={changeHname} >Home</Button>&nbsp;
      <Button variant='contained' onClick={changeGname} >Gallery</Button>&nbsp;
      <Button variant='contained' onClick={changeCname} >Contact</Button>&nbsp;

    </div>
  )
}

export default StateBasic
