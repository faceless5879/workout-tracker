import "./App.css";
import BasicModal from "./components/BasicModal";
import DayView from "../src/components/dayView/DayView";
import UserProfile from "../src/components/userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <BasicModal />
      <UserProfile />
      <DayView />
    </div>
  );
}

export default App;
