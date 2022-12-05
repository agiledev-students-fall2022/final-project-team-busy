
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';


const UserCard = (props) =>{
    return(        
        <Card style={{width: '95vw'}} >
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