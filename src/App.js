import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SequrityPage from './components/SequrityPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SequrityPage" element={<SequrityPage />} />
    </Routes>
  );
}

export default App;
