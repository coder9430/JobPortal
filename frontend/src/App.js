import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route  path="/" element={<Home/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
