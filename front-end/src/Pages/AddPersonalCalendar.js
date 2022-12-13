import TextField from "@mui/material/TextField";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import "./AddPersonalCalendar.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import eventsService from "../services/eventsService";

const AddPersonalCalendar = ({ handleAddEvent }) => {
  let currentDate = new Date().toLocaleString();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameChanges, setNameChanges] = useState(0);

  const navigate = useNavigate();
  const handleSubmission = async () => {
    try {
      const data = await eventsService.createEvent({
        title: name,
        desc: description,
        startTime: startDate,
        endTime: endDate,
      });
      handleAddEvent(data.event);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameChanges(nameChanges + 1);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  let nameError = nameChanges > 0 && name === "";
  let noNameSubmitted = name === "";
  let dateError =
    startDate < currentDate || new Date(endDate) < new Date(startDate);
  let anyError = nameError || noNameSubmitted || dateError;

  return (
    <div className="create-personal-event">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <h2 className="create-event-heading">Create Personal Event</h2>
        <TextField
          id="event-name"
          label="Enter Event Name"
          variant="outlined"
          required
          value={name}
          onChange={handleNameChange}
          inputProps={{ maxLength: 50 }}
          error={nameError}
          helperText={nameError ? "Please enter event name" : ""}
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
          label="Start Date and Time"
          value={startDate}
          onChange={(newDate) => {
            setStartDate(newDate);
          }}
          minDateTime={new Date()}
        />
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="End Date and Time"
          value={endDate}
          onChange={(newDate) => {
            setEndDate(newDate);
          }}
          minDateTime={new Date(startDate)}
        />
        <div className="form-submit-buttons">
          <Button
            variant="outlined"
            className="cancel-button"
            component={Link}
            to="/home"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={anyError}
            onClick={handleSubmission}
            variant="contained"
            className="create-event-button"
          >
            Create Event
          </Button>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default AddPersonalCalendar;
