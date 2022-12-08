import { Grid } from "@mui/material";
import HomeButton from "../Components/HomeButton";
import GroupCalendar from "../Components/GroupCalendar";

// This the Group Calendar page here
const GroupCal = ({ groups, events, handleDelete }) => {
  // Get the group id from the url
  const groupId = window.location.pathname.split("/")[2];
  // Find the group with the id
  const group = groups.find((group) => group._id === groupId);
  // Get the group name
  const groupName = group.groupName;
  // Get all the events for the group
  const groupEvents = group.events;
  // Go through groupEvents and find events from the events array that match the event id
  const groupEventsArray = groupEvents.map((event) => {
    return events.find((event2) => event2._id === event);
  });

  return (
    <Grid container alignItems="flex-start" padding={"25px"}>
      <Grid
        container
        margin="0 2vw"
        justifyContent="space-between"
        alignItems="center"
      >
        <h2>{`${groupName}'s Calendar`}</h2>
        <HomeButton />
      </Grid>
      <Grid item>
        <GroupCalendar events={groupEventsArray} handleDelete={handleDelete} />
      </Grid>
    </Grid>
  );
};

export default GroupCal;
