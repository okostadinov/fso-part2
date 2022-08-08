import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <div>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
      <h3>
        total of {course.parts.reduce((prev, next) => prev + next.exercises, 0)}{" "}
        exercises
      </h3>
    </div>
  );
};

export default Course;
