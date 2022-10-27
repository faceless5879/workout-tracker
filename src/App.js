import "./App.css";
import DayView from "../src/components/dayView/DayView";
import WeekView from './components/WeekView';
import UserProfile from "../src/components/userProfile/UserProfile";
import NavBar from "../src/components/navbar/NavBar";
import LoginSignup from "./components/LoginSignup"
import SignupModal from "./components/SignupModal";
import { useState } from "react";


function App() {

  const [displayProfile, setDisplayProfile] = useState(false);
  const [currentView, setCurrentView] = useState("App");
  
  const setHomeViewHandler = (e) => {
    e.preventDefault();
    setCurrentView("App");
  };

  const setWeekViewHandler = (e) => {
    e.preventDefault();
    setCurrentView("WeekView");
  };

  const setDayViewHandler = (e) => {
    e.preventDefault();
    setCurrentView("DayView");
  };

  return (
    <div className="App">
      {/* <BasicModal /> */}
      <NavBar displayProfile={displayProfile} />
      {displayProfile ? <UserProfile setHomeViewHandler={setHomeViewHandler}/> : null}
      <LoginSignup />
    </div>
  );
}

export default App;
