import React from 'react';

export const Overview = ({ borrowedFrom, lendedTo }) => {
  const totalBorrowed =
    borrowedFrom?.reduce((acc, curr) => (acc += curr.amount), 0) || 0;
  const totalLended =
    lendedTo?.reduce((acc, curr) => (acc += curr.amount), 0) || 0;

  return (
    <div className="col-span-1 row-span-1 rounded-sm bg-black p-10 text-white lg:h-[30rem]">
      <h1 className="my-2 text-xl">Account Details</h1>
      <p className="text-gray-300">
        Get an overview of the amount you have lent and borrowed
      </p>
      <div className="mt-6 flex items-center justify-between lg:w-1/2">
        <div>
          <h2 className="mt-2 text-gray-500">Money Borrowed</h2>
          <p className="text-xl">&#8377;{totalBorrowed}</p>
        </div>
        <div>
          <h2 className="mt-2 text-gray-500">Money Lended</h2>
          <p className="text-xl">&#8377;{totalLended}</p>
        </div>
      </div>
    </div>
  );
};
