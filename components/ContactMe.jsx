import * as React from "react";
import styles from "../styles/contact.module.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import FooterCredit from "./FooterCredit";

export default function ContactMe({ id }) {
  return (
    <>
    <div id={id} className="spacer-50"></div>
      <div className="container-contact-and-heading">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="container-pic-text">
          <div className="form">
            <ContactForm />
          </div>

          <div className="contact-text">
            <p className="nes-balloon from-left ">
              I&apos;d love to connect and talk about ways we can work together
              or any constructive feedback! You can drop a comment here or you
              can find me on LinkedIn, Github, Twitter, or Email me at
              golde.tischler@gmail.com!
            </p>
            <i className="kirby-contact nes-kirby is-small"></i>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
