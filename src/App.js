import './App.css';
import DayView from '../src/components/dayView/DayView';
import WeekView from './components/WeekView';
import LoginSignup from './components/LoginSignup';
import UserProfile from '../src/components/userProfile/UserProfile';
import NavBar from '../src/components/navbar/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [displayProfile, setDisplayProfile] = useState(false);
  const [view, setView] = useState(<LoginSignup></LoginSignup>);

  useEffect(() => {
    if (localStorage.getItem('userid')) {
      setView(<WeekView setView={setView}></WeekView>);
    }
  }, []);

  return (
    <div className='App'>
      {/* <BasicModal /> */}
      <NavBar displayProfile={displayProfile} />
      <>{view}</>
      {/* <LoginSignup setView={setView}></LoginSignup>
      <UserProfile setView={setView}></UserProfile>
      <WeekView setView={setView}></WeekView>
      <DayView setView={setView}></DayView> */}
    </div>
  );
}

export default App;
