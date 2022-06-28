import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/card'
import Resume from './resume.pdf'

const Services = () => {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptatum repudiandae dolor, reiciendis unde architecto at.
                </span>
                <a href={Resume} download>
                    <button className="s-button button">Download CV</button>
                </a>
                <div className="s-blur1 blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            <div className="cards">
                <div style={{left: '22em'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Vanilla JS'}
                    detail = {'The Spotify clone developed in Vanilla JS'}
                    linkName = {'vanillajs'}
                    />
                </div>
                <div style={{top: "16rem"}}>
                    <Card
                    emoji = {Glasses}
                    heading = {'Django API'}
                    detail = {"The Instagram clone with its own database developed in Python's Django Framework"}
                    linkName = {'djangoapi'}
                    />
                </div>
                <div style={{top: "23rem", left: '18rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {'React JS'}
                    detail = {'The Trello clone developed in React JS'}
                    linkName = {'reactjs'}
                    />
                </div>
                <div className="s-blur2 blur" style={{background: "var(--purple"}}></div>
            </div>
        </div>
    )
}

export default Services
