import React, { useState } from 'react';
import { signUpUser } from '../../services';
import { GENDER_OPTIONS } from '../../utils/constants';
import { Input } from '../Input/input';
import { Select } from '../Select/Select';

export const SignUp = () => {
  const initialValues = {
    name: '',
    password: '',
    mobile: '',
  };

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signUpUser(form);
    setForm(initialValues);
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-red-50">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex h-fit w-[30rem] flex-col items-center justify-start gap-5 rounded-md bg-white p-10"
      >
        <h1>Sign Up</h1>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          type="mobile"
          placeholder="Mobile"
          name="mobile"
          onChange={handleChange}
          value={form.mobile}
        />
        <Select options={GENDER_OPTIONS} defaultValue={'Select Gender'} />

        <button
          type="submit"
          disabled
          className="w-full  rounded-md border-2 border-transparent bg-blue-500 px-10 py-2 text-white hover:bg-blue-600 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-black"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};
