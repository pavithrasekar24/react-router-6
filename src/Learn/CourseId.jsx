import React from 'react';
import { useParams } from 'react-router-dom';
export function CourseId() {
  const { courseName } = useParams();
  return (
    <div>
      <h1>Course Id {courseName} </h1>
    </div>
  );
}
