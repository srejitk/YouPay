import React, { useState } from 'react';
import { signInUser } from '../../services';
import { Input } from '../Input/input';

export const SignIn = () => {
  const initialValues = {
    mobile: '',
    password: '',
  };

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signInUser(form);
    setForm(initialValues);
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-red-50">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex h-fit w-[30rem] flex-col items-center justify-start gap-5 rounded-md bg-white p-10"
      >
        <h1>Sign In</h1>
        <Input
          type="tel"
          placeholder="Mobile"
          name="mobile"
          value={form.name}
          onChange={handleChange}
          pattern={'[6-9]{1}[0-9]{9}'}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled
          className="w-full  rounded-md border-2 border-transparent bg-blue-500 px-10 py-2 text-white hover:bg-blue-600 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-black"
        >
          Sign In
        </button>
      </form>
    </section>
  );
};
