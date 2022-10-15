import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
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
