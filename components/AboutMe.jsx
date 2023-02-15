import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Avatar from '@mui/material/Avatar';


export default function AboutMe() {
  return (
    <>
      <Header />

   
        <div className="titleAndBubbleContainerAbout">
        <Avatar className="goldeAbout" alt="Golde Tischler" src="/LinkedinPhoto.jpg" sx={{ width: 126, height: 126 }}/>
         {/*  <i className="kirbyAbout nes-kirby is-small"></i> */}
          {/* <h1 className="aboutTitle">About Me</h1> */}
       

      
          <p className="introBubbleAbout nes-balloon from-left ">
            Hi, I&#39;m Golde! Here&#39;s a little about me...
          </p>
          </div>

          <div className="aboutParagraphContainer nes-container is-rounded is-dark">
            <p className="aboutParagraph">
              I&#39;m a junior full-stack developer with a solid understanding
              of JavaScript, React.js, Next.js HTML, CSS, Tailwind, MUI,
              Node.js, Express, MySql, and some contact with Vue.js. I have a
              wide-range of experience over many disciplines. <br /> <br />I am most
              passionate about being a teacher and being a student. Being in the
              education and research fields for over eight years, I am uniquely
              in tuned with the power of the learning process and appreciating a
              creative, but data driven approach. I believe in having a growth
              mindset and using your understanding of your own learning style to
              optimize this growth. This experience has been a huge asset in my
              transition to programming as it requires the ability to problem
              solve, research, and communicate effectively. Life gets boring
              when we give up on learning new things! Some other things I love
              to learn about include physics, painting, storytelling, and
              political history. <br /> <br />I am fueled by my enthusiasm for new
              experiences. I believe a diversity of perspectives is what drives
              innovation and this has been a guiding force in my life. I have
              lived in many places in the United States and then moved to Spain
              in 2017 without knowing Spanish, having a job, or having much
              savings. I immediately started working hard to create my life in
              Madrid and learn Spanish. I learned that with a bit of humility
              and a good sense of humor, starting from scratch to learn
              something is a lot of fun. The process of learning and teaching
              languages, as well as working in multilingual environments has
              prepared me well for learning coding languages and working with a
              diverse team to solve problems. <br /> <br />I am a highly-driven,
              adaptable developer who will use my diverse background and love of
              learning to create clear, effective solutions.
            </p>
          </div>
        
    

      <Footer />
    </>
  );
}
