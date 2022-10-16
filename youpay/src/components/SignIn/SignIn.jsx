import React, { useState } from 'react';

import { signInUser } from '../../services';
import { Input } from '../Input/input';
import { useNavigate, useLocation } from 'react-router';
import { useUser } from '../../contexts/user/UserContext';

export const SignIn = () => {
  const initialValues = {
    mobile: '',
    password: '',
  };
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const pageToRedirect = location.state?.from?.pathname || '/';

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(form, dispatch, navigate, pageToRedirect);
    setForm(initialValues);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex h-fit w-full flex-col items-center justify-start gap-5 rounded-md bg-white p-10"
    >
      <h1 className="w-full text-left text-2xl ">Sign In</h1>
      <Input
        type="tel"
        placeholder="Mobile"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        pattern={'[6-9]{1}[0-9]{9}'}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full  rounded-md border-2 border-transparent bg-blue-500 px-10 py-2 text-white hover:bg-blue-600 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-black"
      >
        Sign In
      </button>
    </form>
  );
};
