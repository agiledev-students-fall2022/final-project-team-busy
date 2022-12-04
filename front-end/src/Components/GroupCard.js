import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

const GroupCard = ({ name, profilePic }) => {
    return ( 
        <Card style={{
            width: '95vw', 
            border: '2.5px solid deepskyblue',
            margin: '-4px'
            }} >
            <CardHeader 
            title={name}
            avatar= {
                <Avatar 
                src={profilePic} 
                alt={name}
                sx={{bgcolor: blue[500]}}>
                    {name[0].toUpperCase()}
                </Avatar>
            }
            action
            />
        </Card>
                
    );
}

export default GroupCard;