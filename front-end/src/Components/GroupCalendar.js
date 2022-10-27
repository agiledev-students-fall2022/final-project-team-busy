import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import HomeButton from './HomeButton';
import Calendar from './Calendar';


function GroupCalendar() {
    // Different color for different people
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
            backgroundColor: "green"
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
]
    return (
        <Calendar events={events} />
    );
}

export default GroupCalendar;