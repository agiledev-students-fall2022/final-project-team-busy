import axios from "axios";

const BASE_URL = "/auth/";

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

const register = async ({ first, last, email, password, passwordConfirm }) => {
  const res = await axios.post(BASE_URL + "register", {
    first,
    last,
    email,
    password,
    passwordConfirm,
  });

  return res.data;
};

const logout = async () => {
  const res = await axios.post(BASE_URL + "logout", {});
  return res.data;
};

const getMe = async () => {
  const res = await axios.get(BASE_URL + "me", {});
  return res.data;
};

const authService = {
  login,
  register,
  logout,
  getMe,
};

export default authService;
