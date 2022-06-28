import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Iskander</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    )
}

export default navbar
