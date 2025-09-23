import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import cartoon from '../../assets/cartoon.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={cartoon} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a fullstack developer with experience building scalable web applications using modern technologies like React, Node.js, and databases.</p>
                    <p>My passion lies in building clean, scalable web applications that solve real-world problems, with a strong focus on performance, user experience, and modern design principles</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                     <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                       <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievment">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             <div className="about-achievment">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About






