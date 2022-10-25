import "./Events.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Events = () => {
  return (
    <>
      <h2 className="align-left">Events</h2>

      <TextField
        id="outlined-basic"
        label="Search Events"
        variant="outlined"
        sx={{ m: 1, width: "40ch" }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />

      <Button variant="contained">Create Event</Button>
      <h3 className="align-left">Event List</h3>
      <div>{/* events here */}</div>
    </>
  );
};

export default Events;
