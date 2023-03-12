import * as React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/contact.module.css";
import ContactForm from "./ContactForm";

export default function ContactMe({ id }) {


  return (
    <>
      <div id={id} className="container-contact-and-heading">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="container-pic-text">
          <div className="form">
            THIS IS WHERE THE FORM WILL GO
            <ContactForm />
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                {...register('name', { required: true })}
              />
              
              <input
                type="email"
                name="email"
                {...register('email', { required: true })}
              />
              
              <textarea
                name="message"
                {...register('message', { required: true })}
              ></textarea>
              
              <button type="submit">Send</button>
            </form> */}
          </div>

          <div className="contact-text">
            <p className="nes-balloon from-left ">
              I&apos;d love to connect and talk about ways we can work together
              or any constructive feedback! You can drop a comment here or you
              can find me on LinkedIn, Github, Twitter, or Email me at
              golde.tischler@gmail.com!
            </p>
            <i className="kirby-contact nes-kirby is-small"></i>
          </div>
        </div>
      </div>
    </>
  );
}
