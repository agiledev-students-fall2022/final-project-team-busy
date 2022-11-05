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

const register = async ({ email, password, confirmPassword }) => {
  const res = await axios.post(BASE_URL + "register", {
    email,
    password,
    confirmPassword,
  });
  return res.data;
};

const authService = {
  login,
  register,
};

export default authService;
