import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreditHour from "./components/CreditHour/CreditHour";
import Header from "./components/Header/Header";

function App() {
  const [courseName, setCourseName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const handleCourseName = (name) => {
    const findName = courseName.find((nameFind) => nameFind.id === name.id);
    let creditHour = name.credit;
    if (findName) {
      return alert("Name Already Declarer");
    } else {
      courseName.forEach((hour) => {
        creditHour = creditHour + hour.credit;
      });
      if(creditHour > 20){
        return alert("Credit Limit Is Over");
      }else{
        const creditHourRemaining = 20 - creditHour;
        if(creditHourRemaining < 0){
          return alert("Credit Limit Is End");
        }else{
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
          <CreditHour creditRemaining={creditRemaining} creditHour={creditHour} courseName={courseName}></CreditHour>
        </div>
      </div>
    </>
  );
}

export default App;
