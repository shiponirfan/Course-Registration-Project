import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreditHour from "./components/CreditHour/CreditHour";
import Header from "./components/Header/Header";

function App() {
  const [courseName, setCourseName] = useState([]);
  const handleCourseName = (name) => {
    const findName = courseName.find((nameFind) => nameFind.id === name.id);
    if (findName) {
      alert("Name Already Declarer");
    } else {
      setCourseName([...courseName, name]);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex justify-between gap-6">
          <Courses handleCourseName={handleCourseName}></Courses>
          <CreditHour courseName={courseName}></CreditHour>
        </div>
      </div>
    </>
  );
}

export default App;
