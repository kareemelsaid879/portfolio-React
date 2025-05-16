import React from 'react'
import './hero.css'

const Hero = ({ curTheme, toggleTheme }) => {
    return (
        <>
            <div className=' position-relative bg-cover'>
                <button type="button" className="themeSwitcher btn btn-outline-light mt-4 align-self-center position-absolute " onClick={toggleTheme}>{curTheme == 'light' ? 'light Mode' : 'Dark Mode'}</button>
                <div className="d-flex flex-column position-absolute ms-5 coverData">
                    <h2 className=' text-white-50 text-center fs-1 fw-bolder fst-italic lh-lg'>Kareem Elsaid</h2>
                    <h3 className=' text-light text-center fs-3 fw-normal fst-normal'>Frontend Developer&DataBase Admin</h3>
                    <button type="button" className="btn btn-outline-light mt-4 align-self-center">Contact me</button>
                </div>


            </div>
        </>

    )
}

export default Hero
