import React from 'react'
import CV from "../../assets/cv1.pdf"

const CTA = () => {
  return (
   <div className="cta">
    <a href={CV} download className='btn btn--primary'>Download CV</a>
    <a href="#contact" className='btn'>Contact</a>
   </div>
  )
}

export default CTA