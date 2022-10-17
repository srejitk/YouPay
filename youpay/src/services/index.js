import axios from 'axios';
import { toast } from 'react-hot-toast';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('USER_TOKEN')) {
    console.log(typeof localStorage.getItem('USER_TOKEN'));
    req.headers.Authorization = `Bearer ${localStorage.getItem('USER_TOKEN')}`;
  }
  return req;
});

export const signUpUser = async (
  formData,
  dispatch,
  navigate,
  pageToRedirect
) => {
  const toastId = toast.loading('Signing you up...');
  try {
    const res = await API.post(`/auth/signup`, formData);
    const {
      status,
      data: { newUser, token },
    } = res;

    if (status === 201) {
      dispatch({ type: 'AUTH', payload: token });
      dispatch({ type: 'SET_USER', payload: newUser });
      toast.success('Welcome to YouPay', { id: toastId });
      navigate(pageToRedirect);
    }
  } catch (error) {
    const errorRes = error.response;
    toast.error(`Error ${errorRes?.status} : ${errorRes?.data.message}`, {
      id: toastId,
    });
  }
};

export const signInUser = async (
  formData,
  dispatch,
  navigate,
  pageToRedirect
) => {
  const toastId = toast.loading('Signing you in...');
  try {
    const res = await API.post(`/auth/signin`, formData);
    const {
      status,
      data: { existingUser, token },
    } = res;

    if (status === 200) {
      dispatch({ type: 'AUTH', payload: token });
      dispatch({ type: 'SET_USER', payload: existingUser });
      navigate(pageToRedirect);
      toast.success('Welcome back', { id: toastId });
    }
  } catch (error) {
    const { data, status } = error.response;
    toast.error(`Error ${status} : ${data.message}`, { id: toastId });
  }
};

export const logout = (dispatch, navigate) => {
  dispatch({ type: 'LOGOUT' });
  navigate('/auth');
};
export const sendBorrowReq = async (borrowReqData, dispatch) => {
  const toastId = toast.loading('Sending request...');
  try {
    const res = await API.post('/borrow', borrowReqData);
    const { status, data } = res;
    if (status === 201) {
      dispatch({ type: 'SET_USER', payload: data });
      toast.success('Request sent!', {
        id: toastId,
      });
    }
  } catch (error) {
    const { data, status } = error.response;
    toast.error(`Error ${status} : ${data.message}`, { id: toastId });
  }
};
