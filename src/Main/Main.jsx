import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Home } from '../Home/Home';
import { AboutUs } from '../AboutUs/AboutUs';
import { Header } from '../Header/Header';
import React from 'react';
import { Title } from '../Title/Title';
import { Online } from '../Learn/Online';
import { Classroom } from '../Learn/Classroom';
import { Learn } from '../Learn/Learn';
import { CourseId } from '../Learn/CourseId';

export function Main(props) {
  return (
    <div>
      <Title />
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="" element={<Navigate replace to="/home" />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/title:username" element={<Title />} />
            <Route path="/learn" element={<Learn />}>
              <Route path="online" element={<Online />} />
              <Route path="class" element={<Classroom />}>
                <Route path=":courseName" element={<CourseId />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
