//import Login from "../login/Login";
import "./Home.css";
import PersonalCalendar from "../Components/PersonalCalendar";
import { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  // const [date, setDate] = useState(new Date());

  // const onChange = (date) => {
  //   setDate(date);
  // };

  return (
    <div className="intro">
      <div className="heading-and-add-button-header">
        <div>
          <h1 className="heading">Your Calendar</h1>
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

      <div>
        {/* <PersonalCalendar onChange={onChange} value={date} /> */}
        <PersonalCalendar />
      </div>
      {/* <h2 className="schedule">Upcoming Schedling </h2>
      <h2> {dayjs(date).format("MMM DD, YYYY")}</h2> */}
    </div>
  );
}
export default Home;
