import React from "react";
import "./CreateEvents.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { TextField } from "@mui/material";
import FriendList from "../../Components/friends-list/FriendList";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ConfirmationMessage from "../../Components/confirmation-messages/ConfirmationMessage";
import { useEffect } from "react";
import axios from "axios";

const CreateEvents = ({ friends, groups }) => {
  let currentDate = new Date().toLocaleString();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameChanges, setNameChanges] = useState(0);
  const [friendsChecked, setFriendsChecked] = useState([]);
  const [groupsChecked, setGroupsChecked] = useState([]);
  const [created, setCreated] = useState(false);

  // const [friends, setFriends] = useState([])
  // const [groups, setGroups] = useState([])
  // useEffect(() => {
  //     fetch("/create-events/", {
  //         method: 'GET',
  //         headers: { 'Content-Type': 'application/json' },
  //     }).then(response => response.json())
  //         .then(response => {
  //             console.log('Mock Data Loaded Successfully.')
  //             setFriends(response.friends);
  //             setGroups(response.groups);
  //         })
  //         .catch(error => console.error('Error:', error))
  // }, []);
  const [friendsAdded, setFriendsAdded] = useState([]);
  const [groupsAdded, setGroupsAdded] = useState([]);

  const handleToggleFriends = (value) => () => {
    const currentIndex = friendsChecked.indexOf(value);
    const newChecked = [...friendsChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setFriendsChecked(newChecked);

    let newAdded = [];
    newChecked.forEach((friendNum) => {
      newAdded.push(friends[friendNum]);
    });
    setFriendsAdded(newAdded);
    console.log(newAdded);
  };

  const handleToggleGroups = (value) => () => {
    const currentIndex = groupsChecked.indexOf(value);
    const newChecked = [...groupsChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setGroupsChecked(newChecked);

    let newAdded = [];
    newChecked.forEach((groupNum) => {
      newAdded.push(groups[groupNum]);
    });
    setGroupsAdded(newAdded);
    console.log(newAdded);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setCreated(true);
    setTimeout(() => {
      setCreated(false);
    }, 1500);
    // Post request to create-events-page
    axios
      .post("http://localhost:3001/create-events", {
        title: name,
        description: description,
        members: friendsAdded,
        groups: groupsAdded,
        startTime: startDate,
        endTime: endDate,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
    setNameChanges(nameChanges + 1);
  };

  const handleDescriptionChange = (e) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };

  let nameError = nameChanges > 0 && name === "";
  let noNameSubmitted = name === "";
  let dateError =
    startDate < currentDate || new Date(endDate) < new Date(startDate);
  let anyError = nameError || noNameSubmitted || dateError;

  return (
    <div className="create-events-page">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <h2 className="create-event-heading">Create Event</h2>
        <form onSubmit={handleSubmission} method="post">
          <TextField
            id="event-name"
            label="Enter Event Name"
            variant="outlined"
            required
            value={name}
            onChange={handleNameChange}
            inputProps={{ maxLength: 50 }}
            error={nameError}
            helperText={nameError ? "Please enter group name" : ""}
          />
          <TextField
            id="event-description"
            label="Enter Event Description"
            variant="outlined"
            multiline
            minRows={3}
            value={description}
            onChange={handleDescriptionChange}
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Event Start Date and Time"
            value={startDate}
            onChange={(newDate) => {
              setStartDate(newDate);
            }}
            minDateTime={new Date()}
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Event End Date and Time"
            value={endDate}
            onChange={(newDate) => {
              setEndDate(newDate);
            }}
            minDateTime={new Date(startDate)}
          />
          <p>Add friends to {name}</p>
          <FriendList
            friends={friends}
            checked={friendsChecked}
            handleToggle={handleToggleFriends}
            setChecked={setFriendsChecked}
          />
          <p>Add Group to {name}</p>
          <FriendList
            friends={groups}
            checked={groupsChecked}
            handleToggle={handleToggleGroups}
            setChecked={setGroupsChecked}
          />
          <ConfirmationMessage relation={"Event"} confirmed={created} />
          <div className="form-submit-buttons">
            <Button
              variant="outlined"
              className="cancel-button"
              component={Link}
              to="/events"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={anyError}
              variant="contained"
              className="create-event-button"
            >
              Create Event
            </Button>
          </div>
        </form>
      </LocalizationProvider>
    </div>
  );
};

export default CreateEvents;
