import * as React from "react";
import { useState, useEffect } from "react";

import "./lookup.css";
import ToggleButton from "../Components/ToggleButton";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";

import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import GroupsLookup from "../Components/GroupsLookup";

const LookUp = () => {
  const [state, setState] = useState("Users");
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
    if (state === "Users") {
      try {
        const res = await axios.get(
          "/lookupuser/" + query,
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
    } else if (state === "Groups") {
      try {
        const res = await axios.get(
          "/lookupgroup/" + query,
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
    }
  };

  if (state === "Users") {
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
            onClick={() => setState("Users")}
            className="user"
            variant="contained"
          >
            Users
          </Button>
          <Button
            onClick={() => setState("Groups")}
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
              label={"Searching " + state}
              variant="outlined"
              sx={{ width: { xs: "35ch", sm: "50ch", md: "70ch" } }}
              onInput={(e) => onQueryChange(e)}
              InputProps={{ endAdornment: <SearchIcon /> }}
            />
          </form>
          {result ? (
            <UserCard
              id={result.id}
              first={result.first}
              last={result.last}
              username={result.username}
            />
          ) : (
            ""
          )}

          {serverMessage && !result ? (
            <p style={{ marginTop: "15px", fontSize: "larger" }}>
              {serverMessage}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  if (state === "Groups") {
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
            onClick={() => setState("Users")}
            className="user"
            variant="contained"
          >
            Users
          </Button>
          <Button
            onClick={() => setState("Groups")}
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
              label={"Searching " + state}
              variant="outlined"
              sx={{ width: { xs: "35ch", sm: "50ch", md: "70ch" } }}
              onInput={(e) => onQueryChange(e)}
              InputProps={{ endAdornment: <SearchIcon /> }}
            />
          </form>
          {result ? (
            <GroupsLookup groupname={result.groupName} label={"Hi"} />
          ) : (
            ""
          )}

          {serverMessage && !result ? (
            <p style={{ marginTop: "15px", fontSize: "larger" }}>
              {serverMessage}
            </p>
          ) : (
            ""
          )}
        </div>
        <div></div>
      </div>
    );
  }
};

export default LookUp;
