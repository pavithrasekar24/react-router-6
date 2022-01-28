import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const param = useParams();
  console.log(location, param);
  return (
    <div>
      location: {location.pathname}
      <li>
        <Link to="/">Go Back</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
      <li>
        <Link to="/learn">Learn</Link>
      </li>
    </div>
  );
}
