import React from 'react'
import Bar from './Bar'

const Skills = () => {
    return (
        <div className='d-flex flex-column align-items-center py-5 px-5 bg-black'>
            <h2 className='text-center text-white mb-5 fs-1 font-monospace fw-bolder fst-italic'>Skills</h2>
            <p className='text-center 2rem text-justify-content-center text-white px-5 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur fugit harum? Voluptas sit modi laborum nemo earum totam nostrum dolore animi amet, error optio temporibus dicta. Quaerat, eum soluta.</p>
            <div id="skillsDetails" className='d-flex flex-wrap justify-content-center gap-5'>
                <div id="myFocus" className='d-flex flex-column justify-content-center'>
                    <h5 className='text-white fs-4 fst-italic  fw-medium mb-3 text-decoration-underline'>My Focus</h5>
                    <h6 className="skillCats text-white-50">UI/UX dESIGN</h6>
                    <h6 className="skillCats text-white-50">Responsive Design</h6>
                    <h6 className="skillCats text-white-50">Web Development</h6>
                    <h6 className="skillCats text-white-50">Mobile Development</h6>
                </div>
                <div id="skillsPars">
                    <Bar labelIn="Html" percIn="75" />
                    <Bar labelIn="CSS" percIn="60" />
                    <Bar labelIn="JavaScript" percIn="50" />
                    <Bar labelIn="React" percIn="10" />
                    <Bar labelIn="Python" percIn="30" />

                </div>
            </div>
        </div>
    )
}

export default Skills
