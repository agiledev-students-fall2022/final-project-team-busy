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
import User from "./Pages/User";
import FriendCalendar from "./Pages/FriendCalendar";
import AccountSettings from "./Pages/account-settings/AccountSettings";
import ProfilePic from "./Pages/profile-page/profile-page-dp.jpeg";
import GroupCal from "./Pages/GroupCal";
import authService from "./services/authService";
import eventService from "./services/eventsService";

function App() {
  const [user, setUser] = useState(null);
  const [dp, setDP] = useState(user?.profilePic || ProfilePic);
  const [bio, setBio] = useState(user?.bio || "");
  const [friends, setFriends] = useState([]);
  const [groups, setGroups] = useState([]);
  const [events, setEvents] = useState([]);
  const [groupEvents, setGroupEvents] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setUser(null);
    authService.logout();
  };

  useEffect(() => {
    if (user) {
      console.log("Logged in as: ", user.username);
      setFriends(user.friends);
      setGroups(user.groups);
      setEvents(user.events);
      if (user.events) {
        setGroupEvents(
          user.events.filter((e) => {
            return e.users.length > 0;
          })
        );
      }
    }
  }, [user]);

  const handleDeleteEvent = async (eventId) => {
    try {
      await eventService.deleteEvent(eventId);
      setEvents(events.filter((e) => e.id !== eventId));
    } catch (err) {
      console.log(err);
    }
  };
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
              <Route
                path="/home"
                element={
                  <Home
                    user={user}
                    events={events}
                    handleDelete={handleDeleteEvent}
                  />
                }
              />
              <Route path="/lookup" element={<LookUp user={user} />} />
              <Route path="/friends" element={<Friends />} />
              <Route
                path="/create-group"
                element={
                  <CreateGroups
                    user={user}
                    friends={friends}
                    groups={groups}
                    setGroups={setGroups}
                  />
                }
              />
              <Route
                path="/events"
                element={<Events groupEvents={groupEvents} />}
              />
              <Route
                path="/create-events"
                element={<CreateEvents friends={friends} groups={groups} />}
              />
              <Route path="/groups" element={<Groups groups={groups} />} />
              <Route
                path="/addpersonalcalendar"
                element={<AddPersonalCalendar />}
              />

              <Route path="/FriendCalendar" element={<FriendCalendar />} />
              <Route
                path="/GroupProfile/:_id"
                element={
                  <GroupProfile groups={groups} friends={friends} user={user} />
                }
              />
              <Route
                path="/GroupCalendar/:_id"
                element={
                  <GroupCal
                    groups={groups}
                    events={events}
                    user={user}
                    handleDelete={handleDeleteEvent}
                  />
                }
              />
              <Route path="/user/:id" element={<User />} />
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
