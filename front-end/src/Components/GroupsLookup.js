//FOR LOOK UP PAGE 
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { Button } from "@mui/material";

const GroupsLookup = (props) =>{
    // Go through props.users.groups and place all IDs into an array
    let groupIds = [];
    props.user.groups.forEach((group) => {
        groupIds.push(group.id);
    });

    // Check if props.groupID is in the array of group IDs
    let isMember = groupIds.includes(props.groupID);
    // console.log(isMember);

    // Function to handle joining a group
    const handleJoin = () => {
      console.log("Joining group");
    }

    // Ensure that props exist before rendering
    if (!props.groupname) {
      return "";
    }
    return(
        <Card style={{width: '85vw', textAlign: 'left'}}> 
            <CardHeader
             avatar={
                <Avatar>
                  {props.groupname[0]}
                </Avatar>
              }
              title = {props.groupname} 
              // If the user is not a member of the group, display a button to join the group
              action = {isMember ? <Button variant='outlined' color='primary'>Joined</Button> : <Button variant="contained" color="primary" onClick={() => {
                handleJoin();
              }}>Join</Button>}
              />
        </Card>
    )
}

export default GroupsLookup; 