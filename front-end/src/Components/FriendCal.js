import Calendar from "./Calendar";

const FriendCal = (props) => {
  const personalEvents = [
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
      start: new Date(2022, 10, 1, 10, 30, 0, 0),
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
  return <Calendar events={personalEvents} />;
};

export default FriendCal;
