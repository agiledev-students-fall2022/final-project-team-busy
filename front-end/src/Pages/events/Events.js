import "./Events.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EventCard from "../../Components/EventCard";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Events = ({ groupEvents }) => {
  const [eventSearch, setEventSearch] = useState("");

  const filteredGroupEvents = groupEvents.filter((event) => {
    return event.title.toLowerCase().includes(eventSearch.toLowerCase());
  });
  return (
    <Container maxWidth="md" className="events-container">
      <div className="events-flex">
        <h2 className="events-heading">Events</h2>
        <div className="home-button">
          <IconButton aria-label="home" component={Link} to="/home">
            <HomeIcon
              sx={{ height: 45, width: 45, ":hover": { cursor: "pointer" } }}
            />
          </IconButton>
        </div>
      </div>
      <div className="events-search-group">
        <TextField
          value={eventSearch}
          onChange={(e) => setEventSearch(e.target.value)}
          id="outlined-basic"
          label="Search Events"
          variant="outlined"
          sx={{ m: 1, width: "40ch" }}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />

        <Button
          component={Link}
          to="/create-events"
          sx={{ display: "block" }}
          className="events-button"
          variant="contained"
        >
          Create Event
        </Button>
      </div>
      <h3 className="align-left">Event List</h3>
      <Stack>
        {filteredGroupEvents.map((event) => (
          <EventCard
            id={event.id}
            key={event.id}
            startTime={new Date(event.startTime)}
            title={event.title}
            description={event.desc}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Events;
