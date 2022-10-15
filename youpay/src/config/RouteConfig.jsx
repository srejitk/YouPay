import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth } from '../routes/Auth.page';
import { Borrow } from '../routes/Borrow.page';
import { Home } from '../routes/Home.Page';
export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/borrow" element={<Borrow />} />
    </Routes>
  );
};
