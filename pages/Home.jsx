import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <section className='hero'>
            <div className='hero-text'>
                <h1> You Can Work
                    <span>Anywhere</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aperiam enim, ratione aut nihil deserunt minus exercitationem provident nulla quae voluptates, sequi excepturi incidunt vel quidem ut, iure laborum optio.</p>
                <button>
  <NavLink to="/login">Get Started</NavLink>
</button>
            </div>

            <div className='hero-image'>
                <img
                    src="/public/Home.png"
                    alt="You Can Work Anywhere"
                />
            </div>
           
        </section>
    )
}

export default Home
