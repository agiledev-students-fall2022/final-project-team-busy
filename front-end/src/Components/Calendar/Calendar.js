import "./Calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarModal from "./CalendarModal";
import { useEffect, useState } from "react";

const Calendar = ({ events }) => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const localizer = momentLocalizer(moment);

  const onSelectEvent = (e) => {
    setCurrentEvent(e);
  };

  const clearCurrentEvent = () => {
    setCurrentEvent(null);
  };

  useEffect(() => {
    if (currentEvent) {
      // console.log(currentEvent);
    }
  }, [currentEvent]);

  //might have to use portal
  return (
    <>
      {currentEvent && (
        <CalendarModal event={currentEvent} handleClose={clearCurrentEvent} />
      )}
      <BigCalendar
        className="calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        defaultView="month"
        onSelectEvent={(e) => onSelectEvent(e)}
      />
    </>
  );
};
export default Calendar;
