import React from 'react'
import { useState } from 'react'
import './Portfolio.css'
import PortCard from './PortCard'
const Portfolio = () => {

    const portCards = ["Web Design", "Mobile Design", "Logo Design", "Web Applications", "mobile Applications", "PWA Development"]
    const [isEnabled, setIsEnabled] = useState(false)




    return (
        <div>
            <div className={`d-flex flex-row justify-content-between align-items-center w-100 `}>
                <div id="pfolioHead" className='ps-5 pt-5 fs-1 fw-bolder'>Portfolio</div>
                <button type="button" className="btn btn-dark mt-4  mt-5" onClick={() => setIsEnabled(!isEnabled)}>{`${isEnabled ? 'Hide ' : 'Show '}Portfolio`}</button>
            </div>
            <div className={`portCards ${isEnabled ? 'd-flex flex-row flex-wrap' : 'd-none'}  justify-content-center px-5`}>
                {
                    portCards.map((card, index) => {
                        return (
                            <PortCard labelIn={card} bgColor={index % 2 ? 'bg-secondary' : 'bg-dark'} key={index} />
                        )
                    })
                }


            </div>

        </div>

    )
}

export default Portfolio
