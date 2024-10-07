import React from 'react'
import CV from "../../Assets/cv.pdf"

export const CTA = () => {
  return (
    <div className='cta'>
        <a target='_blank' href={CV} className="btn" rel="noopener noreferrer">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}
