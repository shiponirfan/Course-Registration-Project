import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreditHour from "./components/CreditHour/CreditHour";
import Header from "./components/Header/Header";
import Swal from 'sweetalert2';

function App() {
  const [courseName, setCourseName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleCourseName = (name) => {
    const findName = courseName.find((nameFind) => nameFind.id === name.id);
    let creditHour = name.credit;
    if (findName) {
      return Swal.fire(
        'Course Already Added',
        'Try To Add New Course',
        'warning'
      )
    } else {
      courseName.forEach((hour) => {
        creditHour = creditHour + hour.credit;
      });
      if(creditHour > 20){
        return Swal.fire(
          'Credit Limit Is Over',
          'Try Again Later',
          'error'
        )
      }else{
        const creditHourRemaining = 20 - creditHour;
        if(creditHourRemaining < 0){
          return Swal.fire(
            'Credit Hour Remaining End',
            'Try Again Later',
            'error'
          )
        }else{
          let getTotalPrice = name.price;
          courseName.forEach((price) => {
            getTotalPrice = getTotalPrice + price.price;
          });
          setTotalPrice(getTotalPrice);
          setCreditRemaining(creditHourRemaining);
          setCreditHour(creditHour);
          setCourseName([...courseName, name]);
        }
      }
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex justify-between gap-6">
          <Courses handleCourseName={handleCourseName}></Courses>
          <CreditHour totalPrice={totalPrice} creditRemaining={creditRemaining} creditHour={creditHour} courseName={courseName}></CreditHour>
        </div>
      </div>
    </>
  );
}

export default App;
