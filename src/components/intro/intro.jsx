import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/floatingdiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Iskander Istleyev</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producing the Quality work</span>
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icons">
                    <a href="https://github.com/kayo21" target="_blank">
                        <img src={Github} />
                    </a>
                    <a href="#">
                        <img src={Linkedin} />
                    </a>
                    <a href="https://instagram.com/d3ad_inkxide?igshid=YmMyMTA2M2Y=" target="_blank">
                        <img src={Instagram} />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesemoji} alt="" />
                <div style={{top: '-4%', left:'68%'}}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{top: '18rem', left:'4rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" 
                style={{ 
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                 }}></div>
            </div>
        </div>
    )
}

export default Intro