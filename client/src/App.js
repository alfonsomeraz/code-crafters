import './App.css';
import { useApi } from './hooks/use-api';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SearchablePatientTable from './components/SearchablePatientTable';


function SearchBar() {
  return (
    <div>
      <form className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  )
}

// Fake data to work with while building
// const PATIENTS = [
//   {patientID: "COVID-19-1", examID: "Exam-1", image: "picture", keyFinding: "blah blah",
//   brixiaScore: "1,2,3,4", age: "44", sex: "M", bmi: "33.3", zipCode: "123"},
//   {patientID: "COVID-19-2", examID: "Exam-2", image: "picture", keyFinding: "blah blah",
//   brixiaScore: "1,2,3,4", age: "49", sex: "F", bmi: "43.85", zipCode: "123"},
//   {patientID: "COVID-19-3", examID: "Exam-3", image: "picture", keyFinding: "blah blah",
//   brixiaScore: "1,2,3,4", age: "75", sex: "F", bmi: "23.57", zipCode: "123"},
//   {patientID: "COVID-19-4", examID: "Exam-4", image: "picture", keyFinding: "blah blah",
//   brixiaScore: "1,2,3,4", age: "48", sex: "M", bmi: "29.8", zipCode: "123"},
// ];

export default function App() {
  return( 
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
