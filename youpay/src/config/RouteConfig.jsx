import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth } from '../routes/Auth.page';
import { Borrow } from '../routes/Borrow.page';
import { Home } from '../routes/Home.Page';
import RequireAuth from '../utils/RequiresAuth';
export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
      </Route>
    </Routes>
  );
};
