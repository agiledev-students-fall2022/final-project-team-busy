import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

const FriendList = () => {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    let friends = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: '2.5px', marginLeft: '-5px' }}>
            {friends.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`Friend ${value + 1}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default FriendList;
