import React from 'react';

export const Input = ({ type, name, value, placeholder, onChange }) => {
  return (
    <input
      className="w-full rounded-md bg-blue-50 px-4 py-2"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
