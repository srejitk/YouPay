import React from 'react';

export const Button = ({ label, type, ...rest }) => {
  // TODO Add variants for Primary, Secondary
  return (
    <button
      className="my-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-200 disabled:text-black disabled:hover:bg-gray-300"
      type={type}
      {...rest}
    >
      {label}
    </button>
  );
};
