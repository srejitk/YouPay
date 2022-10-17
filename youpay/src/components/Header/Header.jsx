import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
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
        <NavLink to={'/'}>
          <button
            className={`flex items-center  justify-center rounded-full border-2 border-gray-300 px-3 py-1`}
          >
            Home
          </button>
        </NavLink>

        <NavLink to={'/borrow'}>
          {' '}
          <button
            className={`flex items-center justify-center rounded-full border-2 border-gray-300 px-3 py-1`}
          >
            Borrow
          </button>
        </NavLink>
        <NavLink to={'/auth'}>
          {' '}
          <button
            className={`items-center ${
              isLoggedin ? ' hidden' : 'flex'
            } justify-center rounded-full border-2 border-gray-300 px-3 py-1`}
          >
            Join us
          </button>
        </NavLink>
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
