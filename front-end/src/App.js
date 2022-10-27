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
import Groups from "./Groups";

function App() {
  const [user, setUser] = useState(null);

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
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/add-external-calendar" element={<AddExtCal />} />
              <Route path="/home" element={<Home />} />
              <Route path="/lookup" element={<LookUp />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/create-group" element={<CreateGroups />} />
              <Route path="/events" element={<Events />} />
              <Route path="/create-event" element={<CreateEvents />} />
              <Route path="/groups" element={<Groups />} />
              <Route
                path="/addpersonalcalendar"
                element={<AddPersonalCalendar />}
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
