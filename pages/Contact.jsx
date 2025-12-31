import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-left">
          <h1>Contact us</h1>

          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-box">
            <span className="icon">✉️</span>
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button>Send Message</button>
        </div>

        <div className="contact-right">
           <img src="/public/contactimg.jpg" alt="Contact" />
        </div>
      </div>
    </div>
    )
}

export default Contact
