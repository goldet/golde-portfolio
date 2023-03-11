import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/contact.module.css";

export default function ContactMe({ id }) {
  return (
    <>
    <div id={id} className="container-contact-and-heading">
    <h1 className="contact-heading">Contact Me</h1>
        <div className="titleContainer">
         {/*  <i className="kirbyContact nes-kirby is-small"></i> */}
        </div>

        <div className="introBubbleAndContactContainer">
          <div className="introBubbleContainer">
            <p className="introBubbleContact nes-balloon from-left ">
              I&apos;d love to connect and talk abot ways we can work together
              or any constructive feedback! You can drop a comment here or you
              can find me on LinkedIn, Github, Twitter, or Email me at
              golde.tischler@gmail.com!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
