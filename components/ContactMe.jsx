import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

  

export default function ContactMe() {
  return (
    <>
      <Header />

      <div className=""> {/* "jobTitleIntroBubbleContainer */}
        <div className="titleContainer">
          <i class="kirbyContact nes-kirby is-small"></i>
         {/*  <h1 className="contactTitle">
            Contact Me
          </h1> */}
        </div>

<div className="introBubbleAndContactContainer">
        <div className="introBubbleContainer">
          <p className="introBubbleContact nes-balloon from-left ">
            Hi! I&#39;d love to get in contact here&#39;s how you can reach me!
          </p>
        </div>
     

   
      <div className="contactContainer nes-container is-dark">

    
     {/*  <Avatar className="avatar" alt="Golde Tischler" src="/LinkedinPhoto.jpg" sx={{ width: 56, height: 56 }}/> */}
   
    
  
  <p className="contactParagraph">You can find me on LinkedIn, Github, Twitter, or Email me at golde.tischler@gmail.com</p>
  <Footer />
</div>
</div>
</div>
  

     
    </>
  );
}
