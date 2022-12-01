import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
import authService from "./services/authService";

function App() {
  const [user, setUser] = useState(null);
  const [dp, setDP] = useState(user?.profilePic || ProfilePic);
  const [bio, setBio] = useState(user?.bio || "");

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const [friends, setFriends] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/load-friends-and-groups", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Friend + Group Data Loaded Successfully.");
        setFriends(response.friends);
        setGroups(response.groups);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleLogout = () => {
    console.log("Logged out");
    setUser(null);
    authService.logout();
  };

  useEffect(() => {
    console.log("Logged in as: ", user);
  }, [user]);

  return (
    <div className="App">
      <Router>
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Navigate replace to={"/home"} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
            <Route element={<ProtectedRoute user={user} setUser={setUser} />}>
              <Route
                path="/profile"
                element={<ProfilePage user={user} onLogout={handleLogout} />}
              />
              <Route path="/add-external-calendar" element={<AddExtCal />} />
              <Route path="/home" element={<Home user={user} />} />
              <Route path="/lookup" element={<LookUp />} />
              <Route path="/friends" element={<Friends />} />
              <Route
                path="/create-group"
                element={
                  <CreateGroups
                    friends={friends}
                    groups={groups}
                    setGroups={setGroups}
                  />
                }
              />
              <Route path="/events" element={<Events />} />
              <Route
                path="/create-events"
                element={<CreateEvents friends={friends} groups={groups} />}
              />
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
                element={
                  <AccountSettings user={user} setDP={setDP} setBio={setBio} />
                }
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
