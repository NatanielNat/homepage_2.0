import React from 'react'
import "./style.css"
import CTA from "./CTA"
import ME from "../../assets/profile1.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
<h5>Hello Im</h5>
<h1>Nataniel Kaczmarczyk</h1>
<h5 className="text--light">Beginner Frontend Developer</h5>
<CTA />
<HeaderSocials/>

<div className="me">
  <img src={ME} alt="" />
</div>

<a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header