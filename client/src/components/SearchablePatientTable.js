import React from 'react'
import './SearchablePatientTable.css'
import PatientTable from './PatientTable';

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

export default function SearchablePatientTable({ patients }) {
    return (
      <div>
        <SearchBar />
        <PatientTable patients={patients}/>
      </div>
    );
  }

