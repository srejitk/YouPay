import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-20 max-w-[100vw] items-center justify-center gap-10 border-2 border-gray-700">
      <Link to={'/'}>Home</Link>
      <Link to={'/auth'}>Auth</Link>
      <Link to={'/borrow'}>Borrow</Link>
    </header>
  );
};
