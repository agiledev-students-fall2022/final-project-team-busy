//FOR LOOK UP PAGE 
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

const GroupsCard = (props) =>{
    return(
        <Card style={{width: '95vw'}}> 
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

export default GroupsCard; 