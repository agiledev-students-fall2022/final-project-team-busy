import * as React from "react";
import { useState } from "react";

import "./lookup.css";
import ToggleButton from "../Components/ToggleButton";
import SearchBar from "../Components/SearchBar";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const LookUp = () => {
  const [state, setState] = useState("Searching Users");

  return (
    <div className="lookup-page">
      <div className="heading-and-home-button-header">
        <div>
          <h2 className="heading">Look Up</h2>
        </div>
        <div className="home-button">
          <IconButton aria-label="home" component={Link} to="/home">
            <HomeIcon
              sx={{ height: 45, width: 45, ":hover": { cursor: "pointer" } }}
            />
          </IconButton>
        </div>
      </div>

      <div className="toggle-button">
        <Button
          onClick={() => setState("Searching Users")}
          className="user"
          variant="contained"
        >
          Users
        </Button>
        <Button
          onClick={() => setState("Searching Groups")}
          className="groups"
          variant="contained"
        >
          Groups
        </Button>
      </div>

      <div className="searching">
        <TextField
          id="outlined-basic"
          label={state}
          variant="outlined"
          sx={{ width: { xs: "35ch", sm: "50ch", md: "70ch" } }}
          InputProps={{ endAdornment: <SearchIcon /> }}
        />
      </div>
    </div>
  );
};

export default LookUp;
