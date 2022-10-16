import './App.css';
import React from 'react';
import { RouteConfig } from './config/RouteConfig';
import { Header } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App relative">
      <Header />
      <RouteConfig />
      <Toaster />
    </div>
  );
}

export default App;
