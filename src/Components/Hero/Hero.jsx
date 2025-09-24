import React from 'react'
import './Hero.css'
import cartoon from '../../assets/cartoon.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={cartoon} alt="Profile cartoon" />
      <h1><span>I'M Abdulkarim,</span> Fullstack developer based in Kenya</h1>
      <p>I'm a fullstack developer with 5 years experience building dynamic, responsive, and scalable web applications. My expertise covers both frontend and backend development, creating seamless user experiences while ensuring performance and security.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
