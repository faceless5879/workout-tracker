import "./App.css";
import BasicModal from "./components/BasicModal";
import DayView from "../src/components/dayView/DayView";
import UserProfile from "../src/components/userProfile/UserProfile";
import NavBar from "../src/components/navbar/NavBar";
import { useState } from "react";

function App() {
  const [displayProfile, setDisplayProfile] = useState(false);
  return (
    <div className="App">
      {/* <BasicModal /> */}
      <NavBar displayProfile={displayProfile} />
      <UserProfile />
    </div>
  );
}

export default App;
