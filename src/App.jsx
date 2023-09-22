
import './App.css'
import Courses from './components/Courses/Courses'
import CreditHour from './components/CreditHour/CreditHour'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex justify-between gap-6">
        <Courses></Courses>
        <CreditHour></CreditHour>
      </div>
    </div>
    </>
  )
}

export default App
