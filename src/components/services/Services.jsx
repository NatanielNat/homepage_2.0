import React from 'react'
import "./style.css"
import {BsCheck} from "react-icons/bs"

const Services = () => {
  return (
    <section id="services">
<h5> What I Offer </h5>
<h2> Services </h2>

<div className="container services__container">
    <article className="service">
        <div className="service__head">
            <h3>Coding</h3>
        </div>

        <ul className="service__list">
            <li>
                <BsCheck className="service__list--icon"/>
                <p>Immutability</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>React Router</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>React Hooks</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>Error Handling</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>CSS Grid</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>CSS BEM convention</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>Responsive Web Design</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>Promises, Async/Await</p>
            </li>
            <li>
                <BsCheck className="service__list--icon"/>
                <p>API fetch,axios</p>
            </li>
        </ul>
    </article>
</div>
    </section>
  )
}

export default Services