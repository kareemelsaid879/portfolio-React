import React from 'react'

const Spinner = () => {
    return (
        <div className="loadContainer d-flex flex-column vw-100 vh-100 align-content-center justify-content-center">
            <h2 className=' text-black text-center fs-1 fw-bolder fst-italic lh-lg'>Portfolio is loading</h2>
            <div className="spinner-border text-primary align-self-center" role="status">
                <span className="visually-hidden text-black">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
