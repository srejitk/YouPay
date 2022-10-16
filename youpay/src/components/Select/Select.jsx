import React from 'react';

export const Select = ({ options, name, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="my-4 w-full rounded-md bg-blue-50 px-4 py-2"
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
