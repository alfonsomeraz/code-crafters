import React from 'react'
import './NavBar.css'

export default function NavBar(){
    return (
        <nav>
            <div className="logo">
                <h1>COV-X</h1>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Exams</li>
                    <li>Admin</li>
                </ul>
            </div>
        </nav>
    )

}