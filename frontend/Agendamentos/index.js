import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from '../Titulo';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

async function getAgendamentos() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(1, "André Francisco da Silva ", "830.119.357-34", "12/03/1949", true, "29182-808", "aandrefranciscodasilva@unitower.com.br", "(27) 99457-5555"),
  createData(2, "João Francisco da Silva ", "130.558.357-34", "13/09/1990", false, "29182-808", "joaofranciscodasilva@unitower.com.br", "(27) 99457-5555"),
  createData(3, "Fernanda de Souza e Paulo ", "130.558.357-34", "13/09/1999", false, "29182-808", "fernanda@unitower.com.br", "(27) 99457-5555"),
  createData(4, "Amanda de Jesus Firmino", "130.558.357-34", "13/09/2001", false, "29182-808", "amanda@unitower.com.br", "(27) 99457-5555"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Agendamentos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Agendamentos</Titulo>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Local</TableCell>
            <TableCell align="right">Data/hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}