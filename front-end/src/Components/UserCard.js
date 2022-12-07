
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';


const UserCard = (props) =>{
  // Ensure that props exist before rendering
  if (!props.first || !props.last || !props.username) {
    return "";
  }
    return(        
        <Card style={{width: '85vw', "marginTop": "15px", textAlign: "left"}} >
            <CardHeader
             avatar={
                <Avatar>
                  {props.first[0]}
                </Avatar>
              }
              title = {props.first + " " + props.last} 
              subheader = {props.username}
              />
        </Card>

    )
}

export default UserCard; 