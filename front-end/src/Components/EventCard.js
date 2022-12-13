import "./EventCard.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const dateOptions = {
  weekday: "short",
  year: "2-digit",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const EventCard = ({ id, owner, startTime, title, description }) => {
  return (
    <Link to={`/events/${id}`} className="event-card-link">
      <Card className="event-card">
        <div className="event-card-header">
          <h3 className="event-card-title">{title}</h3>
          {/* <Button variant="contained">Request</Button> */}
        </div>
        <p className="event-card-desc">{description}</p>
        <span className="event-card-time">
          <AccessTimeIcon sx={{ mr: 0.8 }} />
          {startTime.toLocaleDateString("en-US", dateOptions)}
        </span>
      </Card>
    </Link>
  );
};

export default EventCard;
