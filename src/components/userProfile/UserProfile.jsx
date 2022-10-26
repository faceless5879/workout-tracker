import  React from 'react';
import "./userProfile.css";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function UserProfile() {
  return (
    <div className="card">
      <div>
        <img className="image" alt="Workout Avatar" src={require("./image/f9b1e644099201a068b395489e96013a.jpeg")} />
      </div>
      <h2>Rocky</h2>
      <Stack direction="column" spacing={2}>
        <Item>Height: 6'0</Item>
        <Item>Weight: 100kg</Item>
        <Item>BMI: 22</Item>
      </Stack>
    </div>
  )
}
