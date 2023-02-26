import React from 'react';
import './SearchablePatientTable.css';
import PatientTable from './PatientTable';

function PatientTableSearch() {
  return (
    <div>
      Search: <input type="text" placeholder="Search..." />
    </div>
  );
}

export default function SearchablePatientTable({ patients }) {
  return (
    <div>
      <PatientTableSearch />
      <PatientTable patients={patients} />
    </div>
  );
}