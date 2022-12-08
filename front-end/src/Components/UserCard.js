
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { useNavigate } from 'react-router-dom';


const UserCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("/user/" + props.id);
    navigate("/user/" + props.id);
  }

  // Ensure that props exist before rendering
  if (!props.first || !props.last || !props.username) {
    return "";
  }

  return (
    <Card style={{ width: '85vw', "marginTop": "15px", textAlign: "left" }} >
      <CardHeader
        avatar={
          <Avatar>
            {props.first[0]}
          </Avatar>
        }
        title={props.first + " " + props.last}
        subheader={props.username}
        // Upon clicking the card, the handleClick function is called
        onClick={handleClick}
      />

    </Card>

  )
}

export default UserCard; 