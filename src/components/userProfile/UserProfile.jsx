import  React, { useEffect } from 'react';
import "./userProfile.css";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

let calcBMI = (weight, height) => {
  return (weight / Math.pow((height/100), 2)).toFixed(1);
}

export default function UserProfile() {
  return (
    <div className="card">
      <div>
        <img className="image" alt="Workout Avatar" src={require("./image/f9b1e644099201a068b395489e96013a.jpeg")} />
      </div>
      <h2>Rocky</h2>
      <Stack direction="column" spacing={2}>
        <Item>Height(cm): 182</Item>
        <Item>Weight(kg): 100</Item>
        <Item>BMI: {calcBMI(100, 182)}</Item>
      </Stack>
    </div>
  )
}
