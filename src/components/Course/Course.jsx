import { LuDollarSign } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import PropTypes from "prop-types";

const Course = ({ course, handleCourseName }) => {
  const { image, course_name, course_details, price, credit } = course;
  return (
    <div className="card bg-white p-4">
      <img
        src={image}
        alt={`Image For Course: ${course_name}`}
        className="rounded-xl"
      />
      <div>
        <h2 className="my-3 font-semibold text-lg">{course_name}</h2>
        <p className="text-base mb-4 text-[#1C1B1B99]">{course_details}</p>
        <div className="flex justify-between mb-4">
          <span className="flex items-center text-2xl text-[#1C1B1B]">
            <LuDollarSign />
            <p className="ml-3 text-base font-medium text-[#1C1B1B99]">
              Price : {price}
            </p>
          </span>
          <span className="flex items-center text-2xl text-[#1C1B1B]">
            <FiBookOpen />
            <p className="ml-3 text-base font-medium text-[#1C1B1B99]">
              Credit : {credit}hr
            </p>
          </span>
        </div>
        <button onClick={()=> handleCourseName(course)} className="btn text-lg font-semibold bg-[#2F80ED] hover:bg-[#366bb1] text-white capitalize w-full">
          Select
        </button>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourseName: PropTypes.func.isRequired,
};
export default Course;
