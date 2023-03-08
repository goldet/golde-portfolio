import Link from "next/link";

const Footer = () => {

    return ( 
        <>
         <div className="contactInfo">
        <Link
          className="linkedIn"
          href="https://www.linkedin.com/in/golde-tischler/"
          target="blank"
        >
          <i className="nes-icon linkedin is-medium"></i>
        </Link>
        <Link
          className="gitHub"
          href="https://github.com/goldet"
          target="blank"
        >
          <i className="nes-icon github is-medium"></i>
        </Link>
        

        <Link
          className="twitter"
          href="https://twitter.com/GoldeCodes"
          target="blank"
        >
        <i className="nes-icon twitter is-medium"></i>
        </Link>

        <Link
          className="gmail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=golde.tischler@gmail.com&su=SUBJECT&body=BODY"
          target="blank"
        >
        <i className="nes-icon gmail is-medium"></i>
        </Link>

      </div>
        </>
     );
}
 
export default Footer;