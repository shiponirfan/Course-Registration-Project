import PropTypes from "prop-types";
const CreditHour = ({
  courseName,
  creditHour,
  creditRemaining,
  totalPrice,
}) => {
  return (
    <div className="md:w-1/4 mt-5 md:mt-0 px-4 md:px-0 md:pr-4 xl:pr-0">
      <div className="md:sticky md:top-0">
        <div className="card bg-white p-6">
          <h2 className="lg:text-lg font-bold text-[#2F80ED] pb-4 border-b-2">
            Credit Hour Remaining {creditRemaining} hr
          </h2>
          <div className="pt-4 lg:pb-6 pb-2 border-b-2">
            <h2 className="lg:text-xl font-bold">Course Name</h2>
            <ul className="lg:pt-6 pt-2 list-decimal list-inside">
              {courseName.map((name) => (
                <li
                  key={name.id}
                  className="lg:text-base text-sm text-[#1C1B1B99] lg:my-2 my-1"
                >
                  {name.course_name}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="lg:text-base text-sm font-medium text-[#1C1B1BCC] py-4 border-b-2">
            Total Credit Hour : {creditHour}
          </h3>
          <h3 className="lg:text-base text-sm font-semibold text-[#1C1B1BCC] pt-4">
            Total Price : {totalPrice} USD
          </h3>
        </div>
      </div>
    </div>
  );
};
CreditHour.propTypes = {
  courseName: PropTypes.array.isRequired,
  creditHour: PropTypes.number.isRequired,
  creditRemaining: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
export default CreditHour;
