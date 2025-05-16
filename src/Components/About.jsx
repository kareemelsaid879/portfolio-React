import React from 'react'
import './About.css'

const About = ({ curTheme = 'light' }) => {
    return (

        <div className={`d-flex flex-md-row flex-sm-column gap-5 m-5 aboutContainer ${curTheme === 'light' ? 'bg-black' : 'bg-white'}`}>

            <section className='d-flex align-items-center text-center  ps-5 w-100'>
                <h2 className='about'>About me</h2>
            </section>
            <section className='d-flex flex-column gap-3'>
                <p className='fs-5 align-items-start text-dark-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit explicabo perspiciatis eos, ipsa necessitatibus dicta blanditiis sunt vitae voluptates amet? Quidem consequuntur voluptates soluta pariatur totam labore? Nemo, nam atque ipsa id rerum quaerat veritatis excepturi inventore labore deserunt eum qui suscipit vero unde! Nulla molestias reiciendis exercitationem beatae quae alias eius aliquam pariatur ad voluptas nemo, dolores debitis!</p>
                <button type="button" className="btn align-self-start bg-black text-white-50 fs-3">Download Resume</button>
            </section>

        </div >

    )
}

export default About
