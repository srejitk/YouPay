import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Auth } from '../routes/Auth';
import { Borrow } from '../routes/Borrow';
import { Home } from '../routes/Home';

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
