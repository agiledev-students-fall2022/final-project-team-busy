import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:3001/auth/";

const login = async ({ email, password }) => {
  const res = await axios.post(
    BASE_URL + "login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};

const register = async ({
  username,
  first,
  last,
  email,
  password,
  passwordConfirm,
}) => {
  const res = await axios.post(
    BASE_URL + "register",
    {
      username,
      first,
      last,
      email,
      password,
      passwordConfirm,
    },
    {
      withCredentials: true,
    }
  );

  return res.data;
};

const logout = async () => {
  const res = await axios.post(
    BASE_URL + "logout",
    {},
    { withCredentials: true }
  );
  return res.data;
};

const getMe = async () => {
  const res = await axios.get(
    BASE_URL + "me",
    {},
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const authService = {
  login,
  register,
  logout,
  getMe,
};

export default authService;
