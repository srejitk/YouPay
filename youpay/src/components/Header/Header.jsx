import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user/UserContext';
import { logout } from '../../services';

export const Header = () => {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const isLoggedin = !!localStorage.getItem('USER_TOKEN');
  return (
    <header className="sticky top-0 z-30 flex h-20 max-w-[100vw] items-center justify-between gap-10 bg-white px-10 shadow-md lg:px-20">
      <h1 className="text-xl font-medium">
        <span className="text-blue-500">You</span>Pay
      </h1>
      <div className="flex gap-10">
        <Link to={'/'}>Home</Link>
        <Link to={'/auth'}>Auth</Link>
        <Link to={'/borrow'}>Borrow</Link>
      </div>
      <button
        className={`flex items-center ${
          isLoggedin ? 'visible' : 'invisible '
        } justify-center rounded-full border-2 border-gray-300 px-3 py-1`}
        onClick={() => logout(dispatch, navigate)}
      >
        Logout
      </button>
    </header>
  );
};
