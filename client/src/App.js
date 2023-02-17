import './App.css';
// import Navigationbar from './components/navigationbar';

import { useApi } from './hooks/use-api';


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

function PatientRow({ patient }) {
  const patientData = patient;

  return (
    <tr>
      <td>{patientData.patientID}</td>
      <td>{patientData.examID}</td>
      <td>{patientData.image}</td>
      <td>{patientData.keyFinding}</td>
      <td>{patientData.brixiaScore}</td>
      <td>{patientData.age}</td>
      <td>{patientData.sex}</td>
      <td>{patientData.bmi}</td>
      <td>{patientData.zipCode}</td>
    </tr>
  );
}

function PatientTable({ patients }) {
  const rows = [];

  patients.forEach((patient) => {
    rows.push(
      <PatientRow
        patient={patient}
        key={patient.patientID} />
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Exam ID</th>
            <th>Image</th>
            <th>Key Findings</th>
            <th>Brixia Score</th>
            <th>Age</th>
            <th>Sex</th>
            <th>BMI</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function SearchablePatientTable({ patients }) {
  return (
    <div>
      <SearchBar />
      <PatientTable patients={patients}/>
    </div>
  );
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
  return <SearchablePatientTable patients={PATIENTS} />;
}