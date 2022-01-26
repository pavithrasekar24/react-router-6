import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { AboutUs } from '../AboutUs/AboutUs';
import { Header } from '../Header/Header';
import React from 'react';
import { Title } from '../Title/Title';
export function Main() {
  return (
    <div>
      <Title />
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
