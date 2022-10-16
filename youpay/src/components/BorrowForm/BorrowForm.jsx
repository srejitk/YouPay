import React from 'react';
import { useState } from 'react';
import { useUser } from '../../contexts/user/UserContext';
import { sendBorrowReq } from '../../services';
import { LOAN_DURATION } from '../../utils/constants';
import { Button } from '../Button/Button';
import { Input } from '../Input/input';
import { Select } from '../Select/Select';

export const BorrowForm = () => {
  const initialValues = {
    amount: '',
    message: '',
    duration: '',
    upi: '',
  };
  const [form, setForm] = useState(initialValues);
  const { dispatch } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendBorrowReq(form, dispatch);
    setForm(initialValues);
  };

  return (
    <form onSubmit={onSubmit} className="w-[30rem] rounded-md bg-white p-10">
      <h1 className="my-4 text-2xl">Borrow request</h1>
      <h2>Send a request </h2>
      <Input
        type="number"
        value={form.amount}
        name={'amount'}
        min={1}
        placeholder={'Amount'}
        onChange={handleChange}
      />
      <Input
        type="text"
        value={form.message}
        name={'message'}
        placeholder={'Message'}
        onChange={handleChange}
      />
      <Select
        name={'duration'}
        onChange={handleChange}
        value={form.duration}
        options={LOAN_DURATION}
      />
      <Input
        type="text"
        name={'upi'}
        value={form.upi}
        placeholder={'UPI ID'}
        onChange={handleChange}
      />
      <Button type="submit" label={'Send Request'} />
    </form>
  );
};
