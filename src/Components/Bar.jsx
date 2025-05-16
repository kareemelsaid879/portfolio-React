import React from 'react'

const Bar = ({ labelIn = 'Html', percIn = '75%' }) => {
    return (
        <div className="d-flex align-items-center mb-3" style={{ width: '40vw' }}>
            <div
                className="bg-dark text-white px-2 py-1 rounded-start"
                style={{
                    // minWidth: '60px',
                    width: '80px',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    lineHeight: '1.2'
                }}
            >
                {labelIn}
            </div>
            <div
                className="progress flex-grow-1 rounded-0 rounded-end"
                style={{ height: '24px' }}
            >
                <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: `${percIn}%` }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
    )
}

export default Bar
