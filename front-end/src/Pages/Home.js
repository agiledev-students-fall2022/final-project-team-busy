//import Login from "../login/Login";
import "./Home.css";
import PersonalCalendar from "../Components/PersonalCalendar";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Home({ user }) {
  return (
    <div className="intro">
      <div className="heading-and-add-button-header">
        <div>
          <h1 className="heading">{user.first}'s Calendar</h1>
        </div>
        <div className="add-button">
          <IconButton
            aria-label="add"
            component={Link}
            to="/AddPersonalCalendar"
          >
            <AddIcon sx={{ height: 45, width: 45 }} />
          </IconButton>
        </div>
      </div>
      <PersonalCalendar />
    </div>
  );
}
export default Home;
