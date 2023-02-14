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
          <i class="nes-icon linkedin is-medium"></i>
        </Link>
        <Link
          className="gitHub"
          href="https://github.com/goldet"
          target="blank"
        >
          <i class="nes-icon github is-medium"></i>
        </Link>
      </div>
        </>
     );
}
 
export default Footer;