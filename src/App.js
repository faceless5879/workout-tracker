import "./App.css";
import DayView from "../src/components/dayView/DayView";
import WeekView from './components/WeekView';
import UserProfile from "../src/components/userProfile/UserProfile";
import NavBar from "../src/components/navbar/NavBar";
import { useState } from "react";


function App() {
  const [displayProfile, setDisplayProfile] = useState(false);
  return (
    <div className="App">
      {/* <BasicModal /> */}
      <NavBar displayProfile={displayProfile} />
      {displayProfile ? <UserProfile /> : null}
    </div>
  );
}

export default App;
