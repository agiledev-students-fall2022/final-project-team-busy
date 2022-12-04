import Calendar from "./Calendar";

const PersonalCalendar = ({ user, events }) => {
  if (!events) return;
  const personalEvents = events.map((e) => {
    return {
      id: e.id,
      title: e.title,
      start: new Date(e.startTime),
      end: new Date(e.endTime),
      desc: e.desc,
    };
  });
  return <Calendar events={personalEvents} />;
};

export default PersonalCalendar;
