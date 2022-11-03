import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

const FriendList = ({friends, checked, handleToggle}) => {
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
        <List dense sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: '2.5px', marginLeft: '-5px' }}>
            {friends && friends.map((friend) => {
                const labelId = `checkbox-list-secondary-label-${friend.value}`;
                return (
                    <ListItem
                        key={friend.value}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(friend.value)}
                                checked={checked.indexOf(friend.value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{bgcolor: friend.bgcolor}}
                                    alt={`Avatar n°${friend.value + 1}`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={friend.name} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default FriendList;
