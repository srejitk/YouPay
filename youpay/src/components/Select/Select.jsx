import React from 'react';

export const Select = ({ options, defaultValue }) => {
  return (
    <select className="w-full px-4 py-2">
      <option value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
