import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
export function AboutUs() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>About Us {location.state.no}</h1>
    </div>
  );
}
