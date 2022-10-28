import React, { useEffect, useState } from 'react';
import "./userProfile.css";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import WeekView from '../WeekView';

const API = process.env.API_URL || 'http://localhost:8080';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

let calcBMI = (weight, height) => {
  const heightInMeters = (height * height) / 10000
  return weight / heightInMeters;
}

export default function UserProfile({ setDisplayProfile, setView }) {

  const [userInfo, setUserInfo] = useState({
    first_name: "",
    height: 0,
    last_name: "",
    weight: 0,
  })

  useEffect(() => {
    setDisplayProfile(true);
  })

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(
        `${API}/user/${localStorage.getItem('userid')}`,
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
      setUserInfo(content);
    })();
  }, []);

  return (
    <div>
      <button className="home-btn">Home</button>
      <div className="card">
        <div>
          <img className="image" alt="Workout Avatar" src={require("./image/f9b1e644099201a068b395489e96013a.jpeg")} />
        </div>
        <h2>{userInfo.first_name}</h2>
        <Stack direction="column" spacing={2}>
          <Item>{userInfo.height}(cm): 182</Item>
          <Item>{userInfo.weight}(kg): 90</Item>
          <Item>BMI: {calcBMI(userInfo.weight, userInfo.height)}</Item>
        </Stack>
      </div>
      <Button onClick={() => {
        setDisplayProfile(false);
        setView(<WeekView setView={setView}></WeekView>)
      }}>Week View</Button>
    </div>
  )
}
