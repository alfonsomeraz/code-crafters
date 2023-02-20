import React from 'react'
import './Table.css'

export default function Table(){
    return (
        <div class="table-container" role="table" aria-label="ExamData">
            <div class="flex-table header" role="rowgroup">
                <div class="flex-row first" role="columnheader">Patient ID</div>
                <div class="flex-row" role="columnheader">Exam ID</div>
                <div class="flex-row" role="columnheader">IMAGE</div>
                <div class="flex-row" role="columnheader">Key Findings</div>
                <div class="flex-row first" role="columnheader">Brixia Score</div>
                <div class="flex-row" role="columnheader">Age</div>
                <div class="flex-row" role="columnheader">Sex</div>
                <div class="flex-row" role="columnheader">BMI</div>
                <div class="flex-row" role="columnheader">Zip Code</div>
            </div>

        </div>
    )
}