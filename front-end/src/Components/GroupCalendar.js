import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import HomeButton from './HomeButton';


function GroupCalendar() {
    const events = [
        {
            id: 1,
            startAt: '2022-10-26T18:00:00.000Z',
            endAt: '2022-10-26T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
        },
        {
            id: 2,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
        }
]
    return (
    
            <Kalend
            events={events}
            initialDate={new Date().toISOString()}
            hourHeight={60}
            initialView={CalendarView.WEEK}
            timeFormat={'24'}
            weekDayStart={'Monday'}
            calendarIDsHidden={['work']}
            language={'en'}
            />
    );
}

export default GroupCalendar;