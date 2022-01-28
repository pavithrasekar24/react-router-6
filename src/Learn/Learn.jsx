import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
export function Learn() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Choose your course</h1>
      <button onClick={() => navigate('/learn/online')}>Online</button>
      <button onClick={() => navigate('/learn/class')}>Classroom</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
