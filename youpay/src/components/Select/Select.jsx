import React from 'react';

export const Select = ({ options, name, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2"
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
