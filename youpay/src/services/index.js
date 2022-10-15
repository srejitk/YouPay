import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('Token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('Token')
    )}`;
  }
  return req;
});

export const signUpUser = async (formData) =>
  await API.post(`/auth/signup`, formData);

export const signInUser = async (formData) => {
  try {
    const res = await API.post(`/auth/signin`, formData);
    const { token } = res;
    localStorage.setItem('Token', token);
  } catch (error) {
    console.log(error);
  }
};

export const sendBorrowReq = async (borrowReqData) => {
  // TODO Add rest of the validations + Toast
  // TODO Add Navigation to Home post request
  try {
    await API.post('/borrow', borrowReqData);
  } catch (error) {
    console.log(error);
  }
};
