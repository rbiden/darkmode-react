import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './pages/App';
import { Homepage } from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>} />
      <Route path='homepage' element={<Homepage/>} />
    </Routes>
  </BrowserRouter>
);