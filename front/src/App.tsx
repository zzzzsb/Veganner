import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Insights from './components/Insights';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Insigths" element={<Insights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
