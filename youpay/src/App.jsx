import './App.css';
import React from 'react';
import { RouteConfig } from './config/RouteConfig';
import { Header } from './components';

function App() {
  return (
    <div className="App relative">
      <Header />
      <RouteConfig />
    </div>
  );
}

export default App;
