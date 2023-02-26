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
                    <li><button className="nav-button">Exams</button></li>
                    <li><button className="nav-button">Admin</button></li>
                </ul>
            </div>
        </nav>
    )
}
