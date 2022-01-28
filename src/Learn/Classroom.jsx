import React from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
export function Classroom() {
  const navigate = useNavigate();
  let courses = ['React', 'MySql', 'Web'];
  return (
    <div>
      <h1>Class Room training</h1>

      {/* <button onClick={() => navigate('/learn/class/web')}>Web Design</button>
      <br />
      <button onClick={() => navigate('/learn/class/react')}>React</button>
      <br />
      <button onClick={() => navigate('/learn/class/mysql')}>MySql</button>
      <br /> */}
      {courses.map((item) => {
        return (
          <li>
            {' '}
            <NavLink to={`/learn/class/${item}`}>{item}</NavLink>
          </li>
        );
      })}
      <Outlet />
    </div>
  );
}
