import React from 'react'
import "./style.css"
import { BsFillBookmarkCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>HTML</h4>
              <small className="text--light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text--light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>JavaScript: ES6+</h4>
              <small className="text--light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div><h4>React</h4>
              <small className="text--light"> Intermediate</small></div>
            </article>
          </div>
        </div>

        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>Python</h4>
              <small className="text--light"> Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>Photoshop</h4>
              <small className="text--light"> Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>Figma</h4>
              <small className="text--light"> Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>SQL</h4>
              <small className="text--light"> Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details--icon" />
              <div>
              <h4>Docker</h4>
              <small className="text--light"> Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
