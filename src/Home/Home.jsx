import React from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>home Page</h1>
      <button onClick={() => navigate('/about', { state: { no: 399 } })}>
        about
      </button>
      <button onClick={() => navigate('/title/2')}>title</button>
    </div>
  );
}
