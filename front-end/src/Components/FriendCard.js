import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {faker} from '@faker-js/faker';
import { Avatar } from '@mui/material';

function FriendCard() {
    return ( 
        <Card style={{width: '95vw'}} >
            <CardHeader 
            avatar = {<Avatar src={faker.image.avatar()} />}
            title={faker.name.fullName()}
            action
            />
        </Card>
    );
}

export default FriendCard;