import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./login/Login";
import SignUp from "./login/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Pages/Home";
import LookUp from "./Pages/LookUp";
import CreateEvents from "./create-events/CreateEvents";
import NavComponent from "./navbar/NavComponent";
import AddExtCal from "./Pages/AddExtCal";
import CreateGroups from "./create-groups/CreateGroups";
import Friends from "./Friends";
import AddPersonalCalendar from "./Pages/AddPersonalCalendar";
import ProfilePage from "./profile-page/ProfilePage";
import Events from "./events/Events";
import Groups from './Groups';
import AccountSettings from "./Pages/AccountSettings";
import ProfilePic from './profile-page/profile-page-dp.jpeg'


function App() {
  const [user, setUser] = useState(null);
  const defaultBio = "Who lives in a pineapple under the sea? SpongeBob SquarePants! Absorbent and yellow and porous is he SpongeBob SquarePants! If nautical nonsense be something you wish SpongeBob SquarePants! Then drop on the deck and flop like a fish! SpongeBob SquarePants!"
  const [dp, setDP] = useState(ProfilePic)
  const [bio, setBio] = useState(defaultBio)


  const handleLogin = () => {
    setUser({ id: 1, name: "John Doe" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/profile" element={<ProfilePage dp={dp} bio={bio} />} />
            <Route path="/add-external-calendar" element={<AddExtCal />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lookup" element={<LookUp />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/create-group" element={<CreateGroups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvents />} />
            <Route path="/groups" element={<Groups />} />
            <Route path='/addpersonalcalendar' element={<AddPersonalCalendar />} />
            <Route path="/account-settings" element={<AccountSettings setDP={setDP} setBio={setBio} />} />
          </Route>
        </Routes>
        {user && <NavComponent />}
      </Router>
    </div>
  );
}

export default App;
