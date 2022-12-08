import Calendar from "./Calendar/Calendar";

const FriendCal = (props) => {
  const events = props.events.map((e) => {
    return {
      title: e.title,
      start: new Date(e.startTime),
      end: new Date(e.endTime),
      desc: e.desc,
    }; 
  })
  return <Calendar events={events} />;
};

export default FriendCal;
