import React, { useEffect } from 'react';
import "./userProfile.css";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import WeekView from '../WeekView';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

let calcBMI = (weight, height) => {
  const heightInMeters = (height * height) / 10000
  return weight / heightInMeters;
}

export default function UserProfile({ setDisplayProfile, setView }) {

  useEffect(() => {
    setDisplayProfile(true);
  })

  return (
    <div>
      <button className="home-btn">Home</button>
      <div className="card">
        <div>
          <img className="image" alt="Workout Avatar" src={require("./image/f9b1e644099201a068b395489e96013a.jpeg")} />
        </div>
        <h2>Rocky</h2>
        <Stack direction="column" spacing={2}>
          <Item>Height(cm): 182</Item>
          <Item>Weight(kg): 90</Item>
          <Item>BMI: {calcBMI(90, 182)}</Item>
        </Stack>
      </div>
      <Button onClick={() => {
        setDisplayProfile(false);
        setView(<WeekView setView={setView}></WeekView>)
      }}>Week View</Button>
    </div>
  )
}
