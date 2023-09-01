import React from 'react'
import "./style.css"
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { useRef,useState } from 'react';
import emailjs from "emailjs-com"


const Contact = () => {

  const [btnStyle,setBtnStyle] = useState("styled");
  const [value,setValue] = useState("")


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlwxjxk', 'template_p5to538', form.current, 'gs2hGyncnfD3wYhQv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  const toggleBtnStyle = () => {
    setBtnStyle("styled2")

  }

  const onInput = (e) => setValue(e.target.value);


  return (
    <section id="contact" className="lastPage">
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__icon"/>
            <h4>Email</h4>
            <h5>natanielkaczmarczyk@gmail.com</h5>
            <a href="mailto:natanielkaczmarczyk@gmail.com" target="_blank" >Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className="contact__icon"/>
            <h4>Whats App</h4>
            <h5>~Nataniel</h5>
            <a href="https://api.whatsapp.com/send?phone=+199199199" target="_blank" >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" onInput={onInput} required />
          <input id="mail" type="email" name="email" placeholder="Your Mail" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button disabled={!value} onClick={toggleBtnStyle} type="submit" className={btnStyle}>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact