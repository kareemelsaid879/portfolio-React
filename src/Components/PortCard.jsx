import React from 'react'
import './Portcard.css'
const PortCard = ({ labelIn = 'Web Design', bgColor = 'bg-black' }) => {
    return (
        <div>
            <div className={`portCard ${bgColor}  m-5 d-flex flex-column align-items-center justify-content-center `}>
                <i href="#" className='text-white fs-3 text-center'>{labelIn}</i>
            </div>
        </div>
    )
}

export default PortCard
