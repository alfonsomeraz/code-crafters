import './App.css';
import NavBar from './components/NavBar';
import { useApi } from './hooks/use-api';
import SearchablePatientTable from './components/SearchablePatientTable';


function SearchBar() {
  return (
    <div>
      Search:
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  )
}

// Fake data to work with while building
const PATIENTS = [
  {patientID: "COVID-19-1", examID: "Exam-1", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "44", sex: "M", bmi: "33.3", zipCode: "123"},
  {patientID: "COVID-19-2", examID: "Exam-2", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "49", sex: "F", bmi: "43.85", zipCode: "123"},
  {patientID: "COVID-19-3", examID: "Exam-3", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "75", sex: "F", bmi: "23.57", zipCode: "123"},
  {patientID: "COVID-19-4", examID: "Exam-4", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "48", sex: "M", bmi: "29.8", zipCode: "123"},
];

export default function App() {
  return( 
    <div>
      <NavBar></NavBar>
      <SearchablePatientTable patients={PATIENTS} />
      </div>
  )
}