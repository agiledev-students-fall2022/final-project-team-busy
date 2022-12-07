import Calendar from "./Calendar/Calendar";

const PersonalCalendar = ({ user, events, handleDelete }) => {
  if (!events) return;
  const personalEvents = events.map((e) => {
    return {
      id: e.id,
      title: e.title,
      start: new Date(e.startTime),
      end: new Date(e.endTime),
      desc: e.desc,
      users: e.users,
      groups: e.groups,
      owner: e.owner,
    };
  });
  return <Calendar events={personalEvents} handleDelete={handleDelete} />;
};

export default PersonalCalendar;
