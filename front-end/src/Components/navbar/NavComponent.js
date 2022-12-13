import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import "./NavComponent.css";

const NavComponent = (props) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  return (
    <Box sx={{ pb: 7 }} ref={ref} className="navbar">
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleIcon />}
            component={Link}
            to="/profile"
          />
          <BottomNavigationAction
            label="Look Up"
            icon={<SearchIcon />}
            component={Link}
            to="/lookup"
          />
          <BottomNavigationAction
            label="Friends"
            icon={<PeopleIcon />}
            component={Link}
            to="/friends"
          />
          <BottomNavigationAction
            label="Groups"
            icon={<GroupsIcon />}
            component={Link}
            to="/groups"
          />
          <BottomNavigationAction
            label="Events"
            icon={<EventIcon />}
            component={Link}
            to="/events"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default NavComponent;
