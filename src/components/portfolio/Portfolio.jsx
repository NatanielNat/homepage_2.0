import React from 'react'
import "./style.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Currency Converter",
    github: "https://natanielnat.github.io/currency-converter-v2/",
    demo: "https://github.com/NatanielNat/currency-converter-v2",
  },
  {
    id: 2,
    img: IMG2,
    title: "To-Do-List",
    github: "https://natanielnat.github.io/to-do-list-v2/",
    demo: "https://github.com/NatanielNat/to-do-list-v2",
  },
 
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,img,title,github,demo})=> {
          return (
            <article key={id} className="portfolio__items">
            <div className="portfolio__item--img">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__buttons">
              <a href={github} className="btn" target="_blank">DEMO</a>
              <a href={demo} target="_blank" className="btn btn--primary">Git</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio