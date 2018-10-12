import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableBody = styled.tbody`
  text-align: right;
`;

const StyledTable = styled.table`
  width: 100%;
  font-weight: lighter;
`;

export const RenderBasicList = item => (
  <span>
    <li>Time: {item.dt_txt}</li>
    <li>Temperature: {Math.round(item.main.temp - 273.15)}</li>
    <li>Description: {item.weather[0].description}</li>
    <li>Wind speed: {item.wind.speed}</li>
  </span>
);

export const RenderBasicTable = items => (
  <StyledTable>
    <thead>
      <tr>
        <th>Time</th>
        <th>Temperature</th>
        <th>Description</th>
        <th>Wind speed</th>
      </tr>
    </thead>
    <StyledTableBody>
      {
        items.map((item, i) => {
          return RenderBasicCells(item, i);
        })
      }
    </StyledTableBody>
  </StyledTable>
);

export const RenderBasicCells = (item, i) => (
  <tr key={i}>
    <td>{item.dt_txt}</td>
    <td>{Math.round(item.main.temp - 273.15)}</td>
    <td>{item.weather[0].description}</td>
    <td>{item.wind.speed}</td>
  </tr>
);


export const RenderPrettyTable = items => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Temperature</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Wind speed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.dt_txt}</TableCell>
            <TableCell numeric>{Math.round(item.main.temp - 273.15)}</TableCell>
            <TableCell numeric>{item.weather[0].description}</TableCell>
            <TableCell numeric>{item.wind.speed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
