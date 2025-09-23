import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "ecf13c4e-ef07-414b-83c5-ee16493fb7fb"); 

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully!");
    event.target.reset();   
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything you want. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>Abdulkarim@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>0724727238</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Kenya</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          
          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
