import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

const FriendList = ({ friends, checked, handleToggle }) => {
  // const [checked, setChecked] = useState([1]);

  // const handleToggle = (value) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //         newChecked.push(value);
  //     } else {
  //         newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  // };

  return (
    <List
      dense
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        paddingTop: "2.5px",
        marginLeft: "-5px",
      }}
    >
      {friends &&
        friends.map((friend) => {
          const pos = friends.indexOf(friend);
          const name =
            friend.first || friend.last
              ? `${friend.first} ${friend.last}`
              : friend.groupName;
          const labelId = `checkbox-list-secondary-label-${pos}`;
          return (
            <ListItem
              key={pos}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(pos)}
                  checked={checked.indexOf(pos) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src={friend.profilePic}
                    alt={`Avatar n°${friend.value + 1}`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};

export default FriendList;
