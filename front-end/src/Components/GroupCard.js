import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {faker} from '@faker-js/faker';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


function GroupCard() {
    return ( 
        <Card style={{width: '95vw'}} >
            <CardHeader 
            title={faker.word.noun()}
            avatar={(<AvatarGroup max={4}>
                <Avatar src={faker.image.avatar()} />
                <Avatar src={faker.image.avatar()} />
                <Avatar src={faker.image.avatar()} />
                <Avatar src={faker.image.avatar()} />
                <Avatar src={faker.image.avatar()} />
              </AvatarGroup>)}
            action
            />
        </Card>
                
    );
}

export default GroupCard;