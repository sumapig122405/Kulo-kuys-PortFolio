import "./App.css";
import kulokuys from "./img/kulokuys.jpeg";
import jamesPic2 from "./img/Portogas_D_James.jpg";
import nelson from "./img/nelson.jpg";
import escanor from "./img/LionSinOfPride.jpg";
import BMS from "./img/barberMS.png";

import {
  FaFacebook,
  FaInstagram,
  FaPalette,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaTools,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";



function Home() {
  return (
    <section className="nelsonSection">
      <div className="aboutUs-container-nelson">
       
        <div className="content-about">

          <h2 className="h2-top"> Hi, We are Kulo-Kuys Group,</h2>
          <h1 className="description">
            Full-Stack Developer: <br /> Web Developer & <br />UI / UX Designer
          </h1>
          <p className="atik">
            We are a team of skilled developers specializing in full-stack web development, capable of building dynamic and scalable web applications from the ground up. From creating responsive, user-friendly interfaces to designing robust backend systems with secure databases, we deliver complete solutions tailored to your needs. Our expertise ensures seamless integration across all layers, turning ideas into fully functional, high-performance web applications.
          </p>
            <div className="contact-ko">
              <span className="contaca-me"><a href="#contact">
                <span className="c">CONTACT ME</span>
                <span><FaArrowRight/></span> </a>
              </span>
            </div>
             
          
        </div>
         <div className="jamesPic">
          <img src={nelson} alt="nelson picture" />
        </div>
        
      </div>
      <div className="ubos-main">
            <div className="grid-ubos">
              <div>
                <FaPalette className="icon2" /> <br />
                <span>
                  <h3>UI/UX Designing</h3>
                </span>
              
              </div>
              <div>
                <FaLaptopCode className="icon2" />
                <br />
                <span>
                  <h3>Frond-End Development</h3>
                </span>
              </div>
              <div>
                <FaServer className="icon2" />
                <br />

                <span>
                  <h3>Back-End Development</h3>
                </span>
              </div>
              <div>
                <FaLayerGroup className="icon2" /> <br />
                <span>
                  <h3>Full-Stack Development</h3>
                </span>
              </div>
            </div>
      </div>
    </section>
  );
}


function Members(){

}

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
              <li>
                {" "}
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                {" "}
                <a href="#services">Services</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#skills"> Skills</a>
              </li>
              <li>
                <a href="#system">Systems</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* main/ content */}

      <main id="home">
        {/* HOME PAGE */}
        <section >
          <Home />
        </section>

        {/* About Us */}
        <section className="about" id="about">
          <div className="about-container">
            <div className="left-side">
              <h1>
                Crafting Meaningful Web Application & Intuitive Experiences
              </h1>
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
        <section id="services">
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
                <span>
                  <h3>UI/UX Designing</h3>
                </span>
                <p>
                  Crafting intuitive interfaces with Figma and modern design
                  principles, focused on user behavior and aesthetics.
                </p>
              </div>
              <div>
                <FaLaptopCode className="icon2" />
                <br />
                <span>
                  <h3>Frond-End Development</h3>
                </span>
                <p>
                  Focuses on building user interfaces and experiences using
                  HTML, CSS, JavaScript, and frameworks like React to make
                  websites interactive and visually appealing.
                </p>
              </div>
              <div>
                <FaServer className="icon3" />
                <br />

                <span>
                  <h3>Back-End Development</h3>
                </span>
                <p>
                  Handles server-side logic, databases, APIs, and application
                  architecture, ensuring data storage, processing, and secure
                  communication between client and server.
                </p>
              </div>
              <div>
                <FaLayerGroup className="icon4" /> <br />
                <span>
                  <h3>Full-Stack Development</h3>
                </span>
                <p>
                  Building scalable web applications with MERN stack, ensuring
                  robust backend systems and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Skills  */}
        <section className="skills" id="skills">
          <div className="skills-container">
            <div className="title">
              <h1>Tech Stack & Design Tools</h1>
              <p>
                A comprehensive toolkit for building exceptional digital
                experiences
              </p>
            </div>
            <div className="skillsContent">
              <div className="skills-left-side">
                <h2>Tech Stack</h2>
                <div className="front-end">
                  <div className="yawa">
                    <FaLaptopCode className="logo-subtt" />
                    <h3> Front-End</h3>
                  </div>

                  <span>React</span>
                  <span>JavaScript (ES6+)</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>BootStrap</span>
                </div>
                <div className="backend">
                  <div className="yawa">
                    <FaServer className="logo-subtt" />
                    <h3>Back-End</h3>
                  </div>

                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Java</span>
                  <span>RESTful APIs</span>
                  <span>MongoDB</span>
                  <span>MySql</span>
                </div>
              </div>
              <div className="skills-right-side">
                <h2>Design & Testing Tools</h2>
                <div className="design">
                  <div className="yawa">
                    <FaPalette className="logo-subtt" /> <br />
                    <h3>UI/UX Design</h3>
                  </div>
                  <span>Figma</span>
                  <span>Adobe XD</span>
                  <span>Sketch</span>
                </div>
                <div className="tools">
                  <div className="yawa">
                    <FaTools className="logo-subtt" />
                    <h3>Tools</h3>
                  </div>

                  <span>GIT&GitHub</span>
                  <span>Postman</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* system/s we built */}
        <section className="systemSection" id="system">
          <div className="systemContainer">
            <div className="systemDesc">
              <h1>System We Built</h1>
              <p>
                Comprehensive portfolio of full-stack systems and platforms I've
                engineered from concept to deployment. Each project showcases my
                expertise in modern web technologies and problem-solving
                capabilities.
              </p>
            </div>
            <div className="systemContent">
              <div>
                <img src={BMS} alt="system image" width={500} />
                <div className="aboutSystem">
                  <p>FULL-STACK</p>
                  <h1>Barber Booking Appointment Management System</h1>
                  <p>
                    Developed and implemented a web-based appointment management
                    system for a local barbershop, streamlining booking,
                    scheduling, and client management. This system demonstrates
                    proficiency in full-stack development, database design, and
                    user experience optimization. Features enhance operational
                    efficiency and provide a seamless experience for both
                    barbers and clients.
                  </p>
                  <div className="features">
                    <h2>Key Features</h2>
                    <div className="features-inside">
                      <ul>
                        <li>
                          Real-time appointment booking and calendar management
                        </li>
                        <li>Customer profile and service history tracking</li>
                        <li>Barber availability scheduling and management</li>
                        <li>
                          Automated notifications for appointments and reminders
                        </li>
                        <li>
                          Secure user authentication and role-based access for
                          staff and clients
                        </li>
                        <li>
                          Responsive dashboard for easy access on desktop and
                          mobile
                        </li>
                      </ul>
                    </div>

                    <div className="stacks-used">
                      <span>Html</span>
                      <span>Css</span>
                      <span>Javascript</span>
                      <span>Bootstrap</span>
                      <span>Php</span>
                      <span>Mysql</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* wdwadawda */}
              <div>
                <img src={BMS} alt="system image" width={500} />
                <div className="aboutSystem">
                  <p>FULL-STACK</p>
                  <h1>Barber Booking Appointment Management System</h1>
                  <p>
                    Developed and implemented a web-based appointment management
                    system for a local barbershop, streamlining booking,
                    scheduling, and client management. This system demonstrates
                    proficiency in full-stack development, database design, and
                    user experience optimization. Features enhance operational
                    efficiency and provide a seamless experience for both
                    barbers and clients.
                  </p>
                  <div className="features">
                    <h2>Key Features</h2>
                    <div className="features-inside">
                      <ul>
                        <li>
                          Real-time appointment booking and calendar management
                        </li>
                        <li>Customer profile and service history tracking</li>
                        <li>Barber availability scheduling and management</li>
                        <li>
                          Automated notifications for appointments and reminders
                        </li>
                        <li>
                          Secure user authentication and role-based access for
                          staff and clients
                        </li>
                        <li>
                          Responsive dashboard for easy access on desktop and
                          mobile
                        </li>
                      </ul>
                    </div>

                    <div className="stacks-used">
                      <span>Html</span>
                      <span>Css</span>
                      <span>Javascript</span>
                      <span>Bootstrap</span>
                      <span>Php</span>
                      <span>Mysql</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src={BMS} alt="system image" width={500} />
                <div className="aboutSystem">
                  <p>FULL-STACK</p>
                  <h1>Barber Booking Appointment Management System</h1>
                  <p>
                    Developed and implemented a web-based appointment management
                    system for a local barbershop, streamlining booking,
                    scheduling, and client management. This system demonstrates
                    proficiency in full-stack development, database design, and
                    user experience optimization. Features enhance operational
                    efficiency and provide a seamless experience for both
                    barbers and clients.
                  </p>
                  <div className="features">
                    <h2>Key Features</h2>
                    <div className="features-inside">
                      <ul>
                        <li>
                          Real-time appointment booking and calendar management
                        </li>
                        <li>Customer profile and service history tracking</li>
                        <li>Barber availability scheduling and management</li>
                        <li>
                          Automated notifications for appointments and reminders
                        </li>
                        <li>
                          Secure user authentication and role-based access for
                          staff and clients
                        </li>
                        <li>
                          Responsive dashboard for easy access on desktop and
                          mobile
                        </li>
                      </ul>
                    </div>

                    <div className="stacks-used">
                      <span>Html</span>
                      <span>Css</span>
                      <span>Javascript</span>
                      <span>Bootstrap</span>
                      <span>Php</span>
                      <span>Mysql</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src={BMS} alt="system image" width={500} />
                <div className="aboutSystem">
                  <p>FULL-STACK</p>
                  <h1>Barber Booking Appointment Management System</h1>
                  <p>
                    Developed and implemented a web-based appointment management
                    system for a local barbershop, streamlining booking,
                    scheduling, and client management. This system demonstrates
                    proficiency in full-stack development, database design, and
                    user experience optimization. Features enhance operational
                    efficiency and provide a seamless experience for both
                    barbers and clients.
                  </p>
                  <div className="features">
                    <h2>Key Features</h2>
                    <div className="features-inside">
                      <ul>
                        <li>
                          Real-time appointment booking and calendar management
                        </li>
                        <li>Customer profile and service history tracking</li>
                        <li>Barber availability scheduling and management</li>
                        <li>
                          Automated notifications for appointments and reminders
                        </li>
                        <li>
                          Secure user authentication and role-based access for
                          staff and clients
                        </li>
                        <li>
                          Responsive dashboard for easy access on desktop and
                          mobile
                        </li>
                      </ul>
                    </div>

                    <div className="stacks-used">
                      <span>Html</span>
                      <span>Css</span>
                      <span>Javascript</span>
                      <span>Bootstrap</span>
                      <span>Php</span>
                      <span>Mysql</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact section */}
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="contact-heading">
              <div className="contact-heading-internal">
                <h1>Let's Collaborate</h1>
                <p>
                  Have a project in mind? Let's discuss how we can work together
                  to bring your <br />
                  vision to life.
                </p>
              </div>

              <div className="grid-contact">
                <div className="contact-left-side">
                  <div className="contact-descript">
                    <h2>Get in Touch</h2>
                    <p>
                      I'm always open to discussing new projects, creative
                      ideas, or opportunities to be part of your vision. Whether
                      you need a full-stack developer, UI/UX designer, or Web3
                      specialist, I'm here to help.
                    </p>
                    <div className="contact-info">
                      <div className="email">
                        <div>
                          <FaEnvelope className="contact-icon" />
                        </div>
                        <div className="icon-title-loc">
                          <div className="email-font">Email</div>
                          <div className="mail">kulokuys@gmail.com</div>
                        </div>
                      </div>

                      <div className="phone">
                        <div>
                          <FaPhone className="contact-icon" />
                        </div>

                        <div className="icon-title-loc">
                          <div className="phone-font">Phone</div>

                          <div className="phon">+63 0967 8501 526</div>
                        </div>
                      </div>
                      <div className="location">
                        <div>
                          <FaMapMarkerAlt className="contact-icon" />
                        </div>
                        <div className="icon-title-loc">
                          <div className="location-font">Location</div>
                          <div className="loc">
                            Ormoc City, Leyte, Philippines
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="projects">
                    <p>Available for:</p>
                    <span>Freelance Projects</span>
                    <span>School System Projects</span>
                    <span>Full-time Roles</span>
                  </div>
                </div>
                <div className="contact-right-side">
                  <form action="" className="form">
                    <div className="message">
                      <label id="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="message">
                      <label id="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="message">
                      <label id="message"> Your Message</label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your project..."></textarea>
                    </div>

                    <div className="send-message-btn">
                      <button className="send-btn">
                        Send Message
                        <span>
                          <FaPaperPlane className="send-icon" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer  */}

      <footer>
        <div className="footer-container">
          <div>
            <p>&copy; 2026 Kulokuys. All Rights Reserved</p>
          </div>
          Built with React + Vite, CSS. Design by Kulokuys
        </div>
      </footer>
    </>
  );
}

export default App;
