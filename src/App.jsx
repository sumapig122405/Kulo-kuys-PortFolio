import "./App.css";
import kulokuys from "./img/kulokuys.jpeg";
import jamesPic2 from "./img/Portogas_D_James.jpg";
import nelson from "./img/nelson.jpg";
import escanor from "./img/LionSinOfPride.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaPalette,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFigma } from "react-icons/si";

function App() {
  return (
    <>
      {/* header */}
      <header>
        <div className="header-container">
          <div className="content">
            <h3>KULO KUYS GROUP</h3>
          </div>
          <nav>
            <ul className="menu">
              <li>Home</li>
              <li>About Us</li>
              <li> Services</li>
              <li> Skills</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* main/ content */}
      <main>
        {/* HOME PAGE */}
        <section>
          <div className="main-containet">
            <div className="content-main">
              <h2 className="h2-top">Hey, We are the KULO Kuys group,</h2>
              <h1 className="description">
                A Pirate Coder <br /> & Vibe Coder
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident, eum deserunt eveniet possimus exercitationem
                similique officiis eligendi iusto tempora vel. Minus facilis
                porro dolore amet ullam delectus recusandae excepturi accusamus
                magnam. Facilis dolor, necessitatibus quisquam esse nemo
                expedita quaerat?
              </p>
            </div>

            <div className="Picture">
              <img src={kulokuys} alt="kulokoys logo" />
            </div>
          </div>
        </section>

        {/*Home page */}

        <section className="jamesSection">
          <div className="aboutUs-container">
            <div className="jamesPic">
              <img
                src={jamesPic2}
                alt="james picture"
                height={500}
                width={400}
              />
            </div>
            <div className="content-about">
              <h2 className="h2-top">James T. Aligway</h2>
              <h1 className="description">
                UI / UX Designer, <br /> Monster in Front-end development
              </h1>
              <p>
                As a front-end developer, I build modern, responsive, and
                high-performing web applications that provide seamless user
                experiences. I am passionate about creating clean and visually
                appealing interfaces while ensuring functionality and usability
                across different devices and screen sizes. I work with
                technologies like HTML, CSS, JavaScript, React, and Tailwind CSS
                to develop interactive and dynamic user interfaces. I am
                dedicated to writing efficient, maintainable code and
                continuously improving my skills to stay updated with the latest
                trends in web development and deliver better digital
                experiences.
              </p>

              {/* socmed */}
              <div className="socmed">
                <FaFacebook size={30} color="blue" />
                <FaXTwitter size={30} color="black" />
                <FaInstagram size={30} color="E1306C" />
              </div>
            </div>
          </div>
        </section>

        {/* nelson */}

        <section className="nelsonSection">
          <div className="aboutUs-container-nelson">
            <div className="content-about">
              <h2 className="h2-top">Nelson B. Ramirez III</h2>
              <h1 className="description">
                Full-Stack Developer: <br /> Web, Mobile & Software Developer
              </h1>
              <p>
                As a full-stack developer, I design and build complete web
                applications, managing both the front-end and back-end to
                deliver seamless, responsive, and high-performing user
                experiences. On the front-end, I work with HTML, CSS,
                JavaScript, React, and Tailwind CSS to create interactive and
                visually appealing interfaces. On the back-end, I specialize in
                Java with Spring Framework, Node.js, and Express, along with
                databases like MySQL and MongoDB, enabling me to develop
                scalable, secure, and efficient applications. I am passionate
                about writing clean, maintainable code, continuously improving
                my skills, and delivering end-to-end solutions that provide
                meaningful value to users.
              </p>

              {/* socmed */}
              <div className="socmed">
                <FaFacebook size={30} color="blue" />
                <FaXTwitter size={30} color="black" />
                <FaInstagram size={30} color="E1306C" />
              </div>
            </div>
            <div className="jamesPic">
              <img src={nelson} alt="nelson picture" height={500} width={400} />
            </div>
          </div>
        </section>

        {/* Jessie */}
        <section className="jessieSection">
          <div className="aboutUs-container-jessie">
            <div className="jessiePic">
              <img
                src={escanor}
                alt="nelson picture"
                height={500}
                width={400}
              />
            </div>

            <div className="content-about">
              <h2 className="h2-top">Jessie P. Sumapig</h2>
              <h1 className="description">
                QA Tester: <br /> Focused on reliable and well-tested
                applications.
              </h1>
              <p>
                As a software tester, I ensure the quality and reliability of
                applications by identifying bugs, verifying functionality, and
                improving overall user experience. I perform manual and basic
                automated testing to validate that systems meet requirements and
                function correctly across different environments. I am
                detail-oriented and focused on writing clear test cases,
                reporting issues effectively, and collaborating with developers
                to deliver stable and high-quality software. I am continuously
                improving my skills in testing methodologies, tools, and best
                practices to ensure efficient and accurate results.
              </p>

              {/* socmed */}
              <div className="socmed">
                <FaFacebook size={30} color="blue" />
                <FaXTwitter size={30} color="black" />
                <FaInstagram size={30} color="E1306C" />
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="about">
          <div className="about-container">
            <div className="left-side">
              <h1>Crafting Meaningful Web Application & Intuitive Experiences</h1>
            </div>
            <div className="right-side">
              <p>
                Hey, We are Kulo-Kuys, we do Full Stack Development and UI/UX
                Designing passionate about creating visually compelling and
                user-friendly digital experiences.
              </p>
              <p>
                With a keen eye for aesthetics and a deep understanding of user
                behavior, we design and build interfaces that not only look
                great but also resonate with audiences. Whether it's engineering
                a robust MERN stack application, designing a brand identity from
                the ground up, or building web application for seamless
                usability, we blend strategy, creativity, and functionality to
                bring ideas to life.
              </p>

              <div className="tech-stack">
                <h4 className="core-tech">CORE TECHNOLOGIES:</h4>
                <div className="mern">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* services */}
        <section>
          <div>
            <div className="servicesContainer">
              <h2>Our Services</h2>
              <p>
                Explore my recent work with design creation and discover how we
                can transform <br />
                your vision into reality.
              </p>
            </div>
            <div className="grid">
              <div>
                <FaPalette className="icon1" /> <br />
                <span><h3>UI/UX Designing</h3></span>
                <p>Crafting intuitive interfaces with Figma and modern design principles,  focused on user behavior and aesthetics.</p>
              </div>
              <div>
                <FaLaptopCode className="icon2" /><br />
                <span><h3>Frond-End Development</h3></span>
                <p>Focuses on building user interfaces and experiences using HTML, CSS, JavaScript, and frameworks like React to make websites interactive and visually appealing.</p>
              </div>
              <div>
                <FaServer className="icon3" /><br />
               
                <span><h3>Back-End Development</h3></span>
                <p>Handles server-side logic, databases, APIs, and application architecture, ensuring data storage, processing, and secure communication between client and server.</p>
              </div>
              <div>
                <FaLayerGroup className="icon4" /> <br />
                <span><h3>Full-Stack Development</h3></span>
                <p>Building scalable web applications with MERN stack, ensuring 
                  robust backend systems and seamless user experiences.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
