import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './pages/App';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='homepage' element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);