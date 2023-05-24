import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {
 var [names,setNames]=useState(["abc","efg","hjk"])
  return (
    <div style={{padding:'2px',margin:'50px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontsize:"30px"}}>Name </TableCell>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontsize:"30px"}}>Age</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                  {
                    names.map((value,index)=>{
                      return(
                        <TableRow>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>

        </Table>
        </TableContainer>
      
    </div>
  );
};

export default Table1
