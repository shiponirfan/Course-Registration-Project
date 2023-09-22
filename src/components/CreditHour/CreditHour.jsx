import PropTypes from "prop-types";
const CreditHour = ({courseName}) => {
  return (
    <div className="w-1/4">
      <div className="card bg-white p-6">
        <h2 className="text-lg font-bold text-[#2F80ED] pb-4 border-b-2">Credit Hour Remaining 7 hr</h2>
        <div className="pt-4 pb-6 border-b-2">
          <h2 className="text-xl font-bold">Course Name</h2>
          <ul className="pt-6 list-decimal list-inside">
            {
                courseName.map((name) => <li key={name.id} className="text-base text-[#1C1B1B99] my-2">{name.course_name}</li>)
            }
          </ul>
        </div>
        <h3 className="text-base font-medium text-[#1C1B1BCC] py-4 border-b-2">Total Credit Hour : 13</h3>
        <h3 className="text-base font-semibold text-[#1C1B1BCC] pt-4">Total Price : 48000 USD</h3>
      </div>
    </div>
  );
};
CreditHour.propTypes = {
    courseName: PropTypes.array.isRequired
}
export default CreditHour;
