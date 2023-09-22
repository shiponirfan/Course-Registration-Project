import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleCourseName}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-3/4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course} handleCourseName={handleCourseName}></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {
    handleCourseName: PropTypes.func.isRequired,
  };
export default Courses;
