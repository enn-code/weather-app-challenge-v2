import React from 'react';
import styled from 'styled-components';


const StyledTableBody = styled.tbody`
  text-align: right;
`

export const RenderBasicList = item => (
  <span>
    <li>Time: {item.dt_txt}</li>
    <li>Temperature: {Math.round(item.main.temp - 273.15)}</li>
    <li>Description: {item.weather[0].description}</li>
    <li>Wind speed: {item.wind.speed}</li>
  </span>
);

export const RenderBasicTable = item => (
  <table>
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
        item.map((item, i) => {
          return RenderBasicCells(item, i);
        })
      }
    </StyledTableBody>
  </table>
);

export const RenderBasicCells = (item, i) => (
  <tr key={i}>
    <td>{item.dt_txt}</td>
    <td>{Math.round(item.main.temp - 273.15)}</td>
    <td>{item.weather[0].description}</td>
    <td>{item.wind.speed}</td>
  </tr>
);
