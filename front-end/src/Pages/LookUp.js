import * as React from "react";
import { useState, useEffect } from "react";

import "./lookup.css";
import ToggleButton from "../Components/ToggleButton";
import SearchBar from "../Components/SearchBar";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const LookUp = () => {
  const usersList = [
    {
      first: "John",
      last: "Doe",
      username: "johnny123",
    },
    {
      first_name: "Peter",
      last_name: "Pan",
      username: "peters345",
    },
    {
      first_name: "Jennifer",
      last_name: "Lopez",
      username: "jenny718",
    },
  ];
  const [state, setState] = useState("Searching Users");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  // useEffect(()=> {console.log(query)}, [query])

  const onQueryChange = (e) => {
    setQuery(e.target.value);
    //console.log(query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "http://localhost:3001/lookupuser/" + query,
        {},
        {
          withCredentials: true,
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err.response.data.error);
      setResult("");
      setServerMessage(err.response.data.error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label={state}
            variant="outlined"
            sx={{ width: { xs: "35ch", sm: "50ch", md: "70ch" } }}
            onInput={(e) => onQueryChange(e)}
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
        </form>
        {result ? (
          <p>
            {result.first} {result.last}
          </p>
        ) : (
          ""
        )}

        {serverMessage && !result ? serverMessage : ""}
      </div>
    </div>
  );
};

export default LookUp;
