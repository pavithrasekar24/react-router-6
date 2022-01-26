import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <li>
        <Link to="/">Go Back</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
    </div>
  );
}
