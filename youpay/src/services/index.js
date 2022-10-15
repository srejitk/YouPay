import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const signUpUser = async (formData) =>
  await API.post(`/auth/signup`, formData);
