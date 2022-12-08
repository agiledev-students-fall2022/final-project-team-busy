import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "/events/";

const getEvent = async (id) => {
  const res = await axios.get(
    BASE_URL + id,
    {},
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const createEvent = async ({
  title,
  desc,
  startTime,
  endTime,
  groups = [],
  users = [],
}) => {
  const res = await axios.post(
    BASE_URL,
    {
      title,
      desc,
      startTime,
      endTime,
      groups,
      users,
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const deleteEvent = async (id) => {
  const res = await axios.delete(
    BASE_URL + id,
    {},
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const editEvent = async ({
  id,
  title,
  desc,
  startTime,
  endTime,
  groups,
  users,
}) => {
  const res = await axios.put(
    BASE_URL + id,
    {
      id,
      title,
      desc,
      startTime,
      endTime,
      groups,
      users,
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const eventService = {
  getEvent,
  createEvent,
  deleteEvent,
  editEvent,
};

export default eventService;
