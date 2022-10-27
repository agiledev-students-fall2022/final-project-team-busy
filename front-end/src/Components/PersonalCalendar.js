// import * as React from "react";
// import { useState } from "react";
// import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import Calendar from "react-calendar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./PersonalCalendar.css";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const PersonalCalendar = (props) => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      id: 0,
      title: "Daily Standup Meeting",
      start: new Date(2022, 9, 26, 22, 0, 0, 0),
      end: new Date(2022, 9, 26, 22, 30, 0, 0),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.",
    },

    {
      id: 1,
      title: "All Day Event",
      allDay: true,
      start: new Date(2022, 9, 27),
      end: new Date(2022, 9, 28),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.",
    },
    {
      id: 2,
      title: "Meeting",
      start: new Date(2022, 9, 29, 10, 30, 0, 0),
      end: new Date(2022, 9, 29, 12, 30, 0, 0),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.",
    },
    {
      id: 3,
      title: "Lunch with Joe",
      start: new Date(2022, 10, 2, 13, 0, 0, 0),
      end: new Date(2022, 10, 2, 13, 30, 0, 0),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.",
    },
    {
      id: 4,
      title: "Phone interview",
      start: new Date(2022, 10, 4, 15, 17, 30, 0),
      end: new Date(2022, 10, 4, 15, 19, 0, 0),
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.",
    },
  ];
  return (
    <div className="home-big-calendar">
      {/* <Calendar onChange={props.onChange} value={props.date} /> */}
      <BigCalendar
        className="big-calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="day"
      />
    </div>
  );
};

export default PersonalCalendar;
