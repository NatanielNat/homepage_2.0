import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { FaUser } from "react-icons/fa"
import { GiClassicalKnowledge } from "react-icons/gi"
import { MdWorkspacePremium } from "react-icons/md"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdPermContactCalendar } from "react-icons/md"
import "./style.css"
import { useState } from "react"


const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GiClassicalKnowledge /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdWorkspacePremium /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdPermContactCalendar /></a>
    </nav>
  )
}

export default Nav