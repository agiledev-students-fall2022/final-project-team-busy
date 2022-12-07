//FOR LOOK UP PAGE 
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { Button } from "@mui/material";

const GroupsLookup = (props) =>{
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
              />
        </Card>
    )
}

export default GroupsLookup; 