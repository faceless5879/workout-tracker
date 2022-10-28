import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dummy from './dummyData';
import WeekView from '../WeekView';
import ExerciseModal from '../ExerciseModal';

const API = process.env.API_URL || 'https://workout-tracker-api.onrender.com';

function createData(name, weight, sets, reps) {
  return { name, weight, sets, reps };
}
const fakeRows = [
  createData('situps', 100, 6, 12),
  createData(dummy[0]["exercise"], dummy[0]["weight"], dummy[0]["sets"], dummy[0]["reps"]),
  createData(dummy[1]["exercise"], dummy[1]["weight"], dummy[1]["sets"], dummy[1]["reps"])
];

export default function DayView({ setView, workoutId }) {

  const [rows, setRows] = useState(fakeRows)

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        `${API}/exercise/${workoutId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
            'Content-Length': 123,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const content = await rawResponse.json();
      if (Array.isArray(content)) {
        setRows(content);
      }
    })();
  }, []);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Exercise</TableCell>
              <TableCell align="right">Weight(not implemented)</TableCell>
              <TableCell align="right">Sets</TableCell>
              <TableCell align="right">Reps</TableCell>
              <TableCell align="right">Complete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.sets}</TableCell>
                <TableCell align="right">{row.reps}</TableCell>
                <TableCell align="right">{<input type="checkbox" />}</TableCell>
                <TableCell align="right">
                  <ExerciseModal setView={setView} exerciseId={row.id} workoutId={workoutId}></ExerciseModal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => {
        setView(<WeekView setView={setView}></WeekView>)
      }}>Week View</Button>
    </Fragment >
  );
}
