import React, { useState } from 'react';
import { SignUp } from '../components';
import { SignIn } from '../components/SignIn/SignIn';
export const Auth = () => {
  const [slide, setSlide] = useState(false);
  return (
    <main className="background-grad flex flex-col justify-start pt-10">
      <div className="z-10 mx-auto flex h-fit w-fit justify-center rounded-full border-2 border-gray-400/20 bg-gray-200">
        <button
          className={`flex items-center justify-center rounded-full font-medium ${
            !slide ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
          } py-2 px-6 `}
          onClick={() => setSlide(false)}
        >
          Sign In
        </button>
        <button
          className={`flex items-center justify-center rounded-full font-medium ${
            slide ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } py-2 px-6 `}
          onClick={() => setSlide(true)}
        >
          Sign Up
        </button>
      </div>
      <div className="mx-auto mt-10 flex w-full px-4 lg:w-[30rem]">
        <section className="flex h-[30rem] w-full items-center justify-center rounded-lg border-2 border-gray-200/50 bg-white shadow-md">
          {' '}
          {slide ? <SignUp /> : <SignIn />}
        </section>
      </div>
    </main>
  );
};
