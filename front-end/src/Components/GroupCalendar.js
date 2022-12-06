import Calendar from './Calendar';


const GroupCalendar = ({ events }) => {
      // From the groupEvents, get the events for the calendar
      const calEvents = events.map((event) => {
        return {
          // id: event._id,
          title: event.title,
          start: new Date(event.startTime),
          end: new Date(event.endTime),
          desc: event.desc,
        };
      });
      
    return (
        <Calendar events={calEvents} />
    );
}

export default GroupCalendar;