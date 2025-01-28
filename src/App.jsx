import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModelViewer from './components/ModelViewer';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ModelViewer />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
