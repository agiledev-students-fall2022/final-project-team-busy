import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./home/Home";
import LookUp from "./Pages/LookUp";
import CreateEvents from "./create-events/CreateEvents";
import NavComponent from "./navbar/NavBar";
import AddExtCal from "./Pages/AddExtCal";
import { useState } from "react";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";

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
        <Routes>
          <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="Pages/LookUp" element={<LookUp />} />
            <Route path="/create-event" element={<CreateEvents />} />
            <Route path="/add-external-calendar" element={<AddExtCal />} />
          </Route>
        </Routes>
        {user && <NavComponent />}
      </Router>
    </div>
  );
}

export default App;
