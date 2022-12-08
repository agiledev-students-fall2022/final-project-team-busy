import "./CalendarModal.css";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";
import eventService from "../../services/eventsService";

const CalendarModal = ({ event, handleClose, handleDelete }) => {
  const options = {
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
          {event.start.toLocaleDateString("en-US", options)}
        </p>
        <p>
          <strong>End: </strong>
          {event.end.toLocaleDateString("en-US", options)}
        </p>

        {handleDelete && (<Button
          onClick={onDelete}
          className="modal-button"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Delete Event
        </Button>) }
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
