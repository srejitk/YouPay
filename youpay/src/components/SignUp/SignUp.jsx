import React, { useState } from 'react';
import { useUser } from '../../contexts/user/UserContext';
import { signUpUser } from '../../services';
import { useNavigate, useLocation } from 'react-router';
import { GENDER_OPTIONS } from '../../utils/constants';
import { Input } from '../Input/input';
import { Select } from '../Select/Select';

export const SignUp = () => {
  const initialValues = {
    name: '',
    password: '',
    mobile: '',
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
    signUpUser(form, dispatch, navigate, pageToRedirect);
    setForm(initialValues);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex h-fit w-full flex-col items-center justify-start gap-5 rounded-md bg-white p-10"
    >
      <h1 className="w-full text-left text-2xl ">Sign Up</h1>
      <p className=" w-full text-left font-light">
        Join <span className="font-medium text-blue-500">You</span>Pay to get
        access to simplified borrowing ⚡
      </p>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
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
      <Input
        type="mobile"
        placeholder="Mobile"
        name="mobile"
        onChange={handleChange}
        value={form.mobile}
        required
      />
      <Select
        options={GENDER_OPTIONS}
        name={'gender'}
        onChange={handleChange}
        value={form.gender}
        required
      />

      <button
        type="submit"
        className="w-full  rounded-md border-2 border-transparent bg-blue-500 px-10 py-2 text-white hover:bg-blue-600 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-black"
      >
        Sign Up
      </button>
    </form>
  );
};
