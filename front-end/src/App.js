import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect } from "react";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/login/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Pages/Home";
import LookUp from "./Pages/LookUp";
import CreateEvents from "./Pages/create-events/CreateEvents";
import NavComponent from "./Components/navbar/NavComponent";
import AddExtCal from "./Pages/AddExtCal";
import CreateGroups from "./Pages/create-groups/CreateGroups";
import Friends from "./Pages/Friends";
import AddPersonalCalendar from "./Pages/AddPersonalCalendar";
import ProfilePage from "./Pages/profile-page/ProfilePage";
import Events from "./Pages/events/Events";
import Groups from "./Pages/Groups";
import GroupProfile from "./Pages/GroupProfile";
import FriendProfile from "./Pages/FriendProfile";
import FriendCalendar from "./Pages/FriendCalendar";
import AccountSettings from "./Pages/account-settings/AccountSettings";
import ProfilePic from "./Pages/profile-page/profile-page-dp.jpeg";
import GroupCal from "./Pages/GroupCal";

function App() {
  const [user, setUser] = useState(null);
  const defaultBio =
    "Who lives in a pineapple under the sea? SpongeBob SquarePants! Absorbent and yellow and porous is he SpongeBob SquarePants! If nautical nonsense be something you wish SpongeBob SquarePants! Then drop on the deck and flop like a fish! SpongeBob SquarePants!";
  const [dp, setDP] = useState(ProfilePic);
  const [bio, setBio] = useState(defaultBio);

  const [friends, setFriends] = useState([])
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch("/", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(response => {
        console.log('Friend + Group Data Loaded Successfully.')
        setFriends(response.friends);
        setGroups(response.groups);
      })
      .catch(error => console.error('Error:', error))
  }, []);

  const handleLogin = () => {
    setUser({ id: 1, name: "John Doe" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Navigate replace to={"/login"} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route
                path="/profile"
                element={<ProfilePage dp={dp} bio={bio} />}
              />
              <Route path="/add-external-calendar" element={<AddExtCal />} />
              <Route path="/home" element={<Home />} />
              <Route path="/lookup" element={<LookUp />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/create-group" element={<CreateGroups friends={friends} />} />
              <Route path="/events" element={<Events />} />
              <Route path="/create-events" element={<CreateEvents friends={friends} groups={groups} />} />
              <Route path="/groups" element={<Groups />} />
              <Route
                path="/addpersonalcalendar"
                element={<AddPersonalCalendar />}
              />

              <Route path="/FriendCalendar" element={<FriendCalendar />} />
              <Route path="/GroupProfile" element={<GroupProfile />} />
              <Route path="/GroupCalendar" element={<GroupCal />} />
              <Route path="/FriendProfile" element={<FriendProfile />} />
              <Route
                path="/account-settings"
                element={<AccountSettings setDP={setDP} setBio={setBio} />}
              />
            </Route>
          </Routes>
        </div>
        {user && <NavComponent />}
      </Router>
    </div>
  );
}

export default App;
