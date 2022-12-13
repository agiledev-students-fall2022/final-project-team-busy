import "./Event.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import eventService from "../../services/eventsService";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GroupCard from "../../Components/GroupCard";
import FriendCard from "../../Components/FriendCard";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const dateOptions = {
  weekday: "short",
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const EventDetails = () => {
  const { id: eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [eventTimes, setEventTimes] = useState(null);
  useEffect(() => {
    const getEvent = async () => {
      const data = await eventService.getEvent(eventId);
      setEvent(data.event);
      setEventTimes({
        startTime: new Date(data.event.startTime),
        endTime: new Date(data.event.endTime),
      });
    };
    getEvent();
  }, []);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <Container maxWidth="md" className="event-container">
      <div className="event-text">
        <div>
          <h2>{event.title}</h2>
          <p>
            <strong>Description: </strong>
            {event.desc}
          </p>
          <p>
            <strong>Start: </strong>
            {eventTimes.startTime.toLocaleDateString("en-US", dateOptions)}
          </p>
          <p>
            <strong>End: </strong>
            {eventTimes.endTime.toLocaleDateString("en-US", dateOptions)}
          </p>

          <p>
            <strong>Created by</strong> @{event.owner.username}
          </p>
          <h3>Users Added</h3>

          <List className="event-list">
            {event.users.map((user) => (
              <ListItem>
                <FriendCard data={user} className="event-user-card" />
              </ListItem>
            ))}
          </List>
          <h3>Groups Added</h3>
          <List>
            {event.groups.map((group) => (
              <ListItem>
                <GroupCard
                  className="event-group-card"
                  id={group.id}
                  key={group.id}
                  name={group.groupName}
                />
              </ListItem>
            ))}
          </List>
          {/* <div className="event-btns">
            <Button variant="contained">
              <EditIcon sx={{ mr: 0.8 }} />
              Edit
            </Button>
            <Button variant="contained" color="error">
              <DeleteIcon sx={{ mr: 0.8 }} /> Delete
            </Button>
          </div> */}
        </div>
      </div>
    </Container>
  );
};
export default EventDetails;
