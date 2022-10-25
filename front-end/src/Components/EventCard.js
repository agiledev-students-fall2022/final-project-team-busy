import "./EventCard.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const EventCard = ({ id, title, description }) => {
  return (
    <Card className="events-card">
      <div className="events-header">
        <h3 className="events-title">{title}</h3>
        <Button variant="contained">Request</Button>
      </div>

      <span>ID: {id}</span>
      <p className="events-card-desc">{description}</p>
      <a className="card-link" href="#">
        Read more
      </a>
    </Card>
  );
};

export default EventCard;
