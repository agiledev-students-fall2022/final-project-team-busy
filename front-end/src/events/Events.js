import "./Events.css";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EventCard from "../Components/EventCard";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

const Events = () => {
  const events = [
    {
      id: 1234,
      title: "Group Study Session!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
    },
    {
      id: 2456,
      title: "Book Club",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
    },
    {
      id: 3456,
      title: "Company Meeting",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem labore nulla, nihil deserunt adipisci sit ab vero facere, suscipit magnam quidem quibusdam porro facilis ullam necessitatibus, dolor quis dicta tenetur enim.",
    },
  ];

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
          to="/create-event"
          sx={{ display: "block" }}
          className="events-button"
          variant="contained"
        >
          Create Event
        </Button>
      </div>
      <h3 className="align-left">Event List</h3>
      <Stack>
        {events.map((event) => (
          <EventCard
            id={event.id}
            key={event.id}
            title={event.title}
            description={event.description}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Events;
