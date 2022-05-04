import { useState, useEffect} from 'react';
import { PageWrapper } from "../../common/page-wrapper";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

export const Menu = () => {

  useEffect(()=> {
    fetch('http://localhost:3000/menu')
    .then(r => r.json())
    .then((data => {
      console.log(data)
    }))
  })

    return (
        <PageWrapper title='Pizza Menu'>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pizza</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
        </PageWrapper>
    )




}