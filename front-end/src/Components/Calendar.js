import "./Calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Calendar = ({ events }) => {
  const localizer = momentLocalizer(moment);

  return (
    <BigCalendar
      className="calendar"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      selectable
      defaultView="month"
    />
  );
};
export default Calendar;
