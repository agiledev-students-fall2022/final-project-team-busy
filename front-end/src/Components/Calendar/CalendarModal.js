import "./CalendarModal.css";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const CalendarModal = ({ event, handleClose, handleDelete }) => {
  const dateOptions = {
    weekday: "short",
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const onDelete = async () => {
    handleClose();
    handleDelete(event.id);
  };

  const Backdrop = ({ handleClose }) => {
    return <div onClick={handleClose} className="modal-bg"></div>;
  };

  const ModalOverlay = ({ event, handleClose }) => {
    return (
      <Card className="modal-card">
        <CloseIcon
          className="modal-close"
          onClick={handleClose}
          fontSize="large"
        />
        <h2>{event.title}</h2>
        <p>
          <strong>Description: </strong>
          {event.desc}
        </p>
        <p>
          <strong>Start: </strong>
          {event.start.toLocaleDateString("en-US", dateOptions)}
        </p>
        <p>
          <strong>End: </strong>
          {event.end.toLocaleDateString("en-US", dateOptions)}
        </p>

        <Button
          component={Link}
          to={`/events/${event.id}`}
          className="modal-button"
          variant="contained"
          sx={{ mt: 2 }}
        >
          <InfoIcon sx={{ mr: 1 }} />
          Details
        </Button>
        {handleDelete && (
          <Button
            onClick={onDelete}
            className="modal-button"
            variant="contained"
            sx={{ mt: 2 }}
            color="error"
          >
            <DeleteIcon sx={{ mr: 1 }} />
            Delete
          </Button>
        )}
      </Card>
    );
  };

  const Modal = ({ event, handleClose }) => {
    return (
      <div className="modal-container">
        <ModalOverlay event={event} handleClose={handleClose} />
        <Backdrop handleClose={handleClose} />
      </div>
    );
  };
  const modalPlaceholder = document.getElementById("modal-placeholder");

  return (
    <>
      {createPortal(
        <Modal event={event} handleClose={handleClose} />,
        modalPlaceholder
      )}
    </>
  );
};
export default CalendarModal;
