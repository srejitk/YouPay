import React from 'react';

export const CreditScore = ({ score = 750 }) => {
  return (
    <div
      className="col-span-1 row-span-1 flex h-[30rem]
flex-col items-start justify-start bg-purple-200 p-10"
    >
      <h1 className="my-2 text-xl">You Credit Rating</h1>
      <div className="mx-auto mt-6 flex h-40 w-60 flex-col items-center justify-center rounded-tl-full rounded-tr-full border-t-8 border-gray-200 bg-gradient-to-t from-transparent to-green-500/30 pt-6">
        <div className="flex h-20 w-40 flex-col items-center justify-center rounded-tl-full rounded-tr-full border-t-4 border-dotted border-gray-200 bg-gradient-to-t from-transparent to-green-500/30">
          <span className="pt-10 text-4xl font-thin">{score}</span>
        </div>
        <p className="my-2 text-lg font-thin">Your current credit score</p>
      </div>
      <h2 className="my-4">Points to note</h2>
      <ul className="list-disc text-gray-500">
        <li>Improve your credit score by paying back on time.</li>
        <li>Taking multiple debts can lead to score loss.</li>
        <li>Not paying debts on time will lead to score loss.</li>
      </ul>
    </div>
  );
};
