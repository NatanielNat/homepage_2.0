import React from 'react'
import "./style.css"
import ME2 from "../../assets/prof11.png"
import {TbAwardFilled} from "react-icons/tb"
import {AiFillFolder} from "react-icons/ai"
import {GiTalk} from "react-icons/gi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
<div className="about__me">
  <div className="about__me--img">
    <img src={ME2} alt="about image"/>
  </div>
</div>

<div className="about__content">
  <div className="about__cards">
    <article className="about__card">
      <TbAwardFilled className="about__icon"/>
    <h5>Experience</h5>
    <small>10+ Months Of Practice And Learning</small>
    </article>

    <article className="about__card">
      <AiFillFolder className="about__icon"/>
    <h5>Projects</h5>
    <small>32+ Small Projects</small>
    </article>

    <article className="about__card">
      <GiTalk className="about__icon"/>
    <h5>Looking For</h5>
    <small>Work / Experience as Frontend Developer</small>
    </article>
  </div>

  <p>* I have to learn a lot more to be professional or atleast advanced but im willing to learn new and hard stuff just so i can make any project look clean and different from others</p>
  <p>* I can do any task or work if it doesn't take many years of experience and knowledge</p>
  <p>* Im still learning,but im really good at finding answers in internet to solve my codings problems or tasks that i never solved before</p>
    <a href="#contact" className="btn btn--primary"> Let's Talk</a>
</div>
      </div>
    </section>
  )
}

export default About
