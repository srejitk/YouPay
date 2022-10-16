import React from 'react';
import { useUser } from '../../contexts/user/UserContext';
import { CreditScore } from '../Cards/CreditScore/CreditScore';
import { Overview } from '../Cards/Overview/Overview';

export const HomeScreen = () => {
  const {
    state: { userData },
  } = useUser();
  const { borrowedFrom, lendedTo, creditScore } = userData;

  return (
    <div className="row-span-1 mx-auto grid h-fit w-full grid-cols-1 gap-5 p-10 xl:max-w-[1440px] xl:grid-cols-[repeat(2,minmax(50px,1fr))] xl:grid-rows-1">
      <Overview borrowedFrom={borrowedFrom} lendedTo={lendedTo} />
      <CreditScore score={creditScore} />
    </div>
  );
};
