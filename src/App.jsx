import "./App.css";
import kulokuys from "./img/kulokuys.jpeg";
import jamesPic2 from "./img/Portogas_D_James.jpg";
import nelson from "./img/nelson.jpg";
import escanor from "./img/LionSinOfPride.jpg";
import BMS from "./img/barberMS.png";
import daeHo from "./img/idol.jpg";
import MiAh from "./img/Mi-Ah.jpg";
import SuAh from "./img/Su-Ah.jpg";
import trio from "./img/trio.png";
import { FaTwitter } from "react-icons/fa";
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

// member data section

const membersData = [
  {
    id: 1,
    picture: MiAh,
    name: "James T. Aligway",
    title: "Product Manager",
    description:
      "I’m a product manager, guiding product strategy, coordinating teams, and ensuring projects deliver value, meet user needs, and achieve business goals.",
    fb: "https://www.facebook.com/jamesteves.aligway",
    ig: "https://www.facebook.com/jamesteves.aligway",
    twitter: "https://www.facebook.com/jamesteves.aligway",
  },
  {
    id: 2,
    picture: SuAh,
    name: "Nelson B. Ramirez III",
    title: "Developer:",
    description:
      "I’m a developer, creating and maintaining applications, handling both functionality and performance, and ensuring systems run reliably and securely.",
    fb: "https://www.facebook.com/nel.son.ramirez.935391",
    ig: "https://www.facebook.com/nel.son.ramirez.935391",
    twitter: "https://www.facebook.com/nel.son.ramirez.935391",
  },
  {
    id: 3,
    picture: daeHo,
    name: "Jessie P. Sumapig",
    title: "Tester:",
    description:
      "I’m a tester, evaluating applications for bugs, ensuring quality, and verifying that systems run reliably and meet requirements.",
    fb: "https://www.facebook.com/Jessie.sumapig",
    ig: "https://www.facebook.com/Jessie.sumapig",
    twitter: "https://www.facebook.com/Jessie.sumapig",
  },
];

// about us Data
const aboutUsData = [
  {
    sideTitle: " Crafting Meaningful Web Application & Intuitive Experiences",

    firstParagraph:
      " Hey, We are Kulo-Kuys, we do Full Stack Development and UI/UX Designing passionate about creating visually compelling anduser-friendly digital experiences",

    secondParagraph:
      "With a keen eye for aesthetics and a deep understanding of user behavior, we design and build interfaces that not only look great but also resonate with audiences. Whether it's engineering a robust MERN stack application, designing a brand identity from the ground up, or building web application for seamless usability, we blend strategy, creativity, and functionality to bring ideas to life.",

    technologies: ["MongoDB ", "Express.js", "React.js", "Node.js"],
  },
];

// services Data
const servicesData = [
  {
    id: 1,
    icons: FaPalette,
    servicesTitle: "UI/UX Designing",

    description:
      "Crafting intuitive interfaces with Figma and modern design principles, focused on user behavior and aesthetics",
  },
  {
    id: 2,
    icons: FaLaptopCode,
    servicesTitle: "Frond-End Development",

    description:
      "Focuses on building user interfaces and experiences using HTML, CSS, JavaScript, and frameworks like React to make websites interactive and visually appealing.",
  },
  {
    id: 3,
    icons: FaServer,
    servicesTitle: "Back-End Development",

    description:
      "Handles server-side logic, databases, APIs, and application architecture, ensuring data storage, processing, and secure communication between client and server.",
  },
  {
    id: 4,
    icons: FaLayerGroup,
    servicesTitle: "Full-Stack Developement",

    description:
      "Building scalable web applications with MERN stack, ensuring robust backend systems and seamless user experiences.",
  },
];

// skills Data

const skillsData = [
  {
    id: 1,
    icon: FaLaptopCode,
    skillsTitle: "Front-End",
    techStack: ["React", "JavasScript(ES6+)", "HTML5", "CSS3", "BootStrap"],
  },

  {
    id: 2,
    icon: FaPalette,
    skillsTitle: "UI/UX Design",
    techStack: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: 3,
    icon: FaServer,
    skillsTitle: "Back-End",
    techStack: [
      "Node.js",
      "Express.js",
      "Java",
      "RESTful APIs",
      "MongoDB",
      "Mysql",
    ],
  },
  {
    id: 4,
    icon: FaTools,
    skillsTitle: "Tools",
    techStack: ["GIT & GitHub", "Postman"],
  },
];

// system data
const systemsData = [
  {
    id: 1,
    systemImage: BMS,
    systemCategory: "FULL-STACK",
    systemTitle: "Barber Booking Appointment Management System",
    systemDescription:
      "Developed and implemented a web-based appointment management system for a local barbershop, streamlining booking scheduling, and client management. This system demonstrates proficiency in full-stack development, database design, and user experience optimization. Features enhance operational efficiency and provide a seamless experience for both barbers and clients.",
    keyFeatures: [
      " Real-time appointment booking and calendar management",
      "Customer profile and service history tracking",
      "Barber availability scheduling and management",
      " Automated notifications for appointments and reminders",
      "  Secure user authentication and role-based access for staff and clients",
      " Responsive dashboard for easy access on desktop and mobile",
    ],
    techStackUsed: ["Html", "Css", "Javascript", "BootStrap", "Php", "MySql"],
  },
];

const contactData = [
  {
    id: 1,
    email: ["kulokuys@gmail.com"],
    mobileNum: ["+63 0967 8501 526"],
    locations: ["Ormoc City, Leyte, Philippines"],
    projects: [
      "Freelance Projects",
      "School System Projects",
      "Full-time Roles",
    ],
  },
];

// components section

function Header() {
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
function Home() {
  return (
    <section className="nelsonSection">
      <div className="aboutUs-container-nelson">
        <div className="content-about">
          <h2 className="h2-top"> Hi, We are Kulo-Kuys Group,</h2>
          <h1 className="description">
            Full-Stack Developer: <br /> Web Developer & <br />
            UI / UX Designer
          </h1>
          <p className="atik">
            We are a team of skilled developers specializing in full-stack web
            development, capable of building dynamic and scalable web
            applications from the ground up. From creating responsive,
            user-friendly interfaces to designing robust backend systems with
            secure databases, we deliver complete solutions tailored to your
            needs. Our expertise ensures seamless integration across all layers,
            turning ideas into fully functional, high-performance web
            applications.
          </p>
          <div className="contact-ko">
            <span className="contaca-me">
              <a href="#contact">
                <span className="c">CONTACT ME</span>
                <span>
                  <FaArrowRight />
                </span>{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="jamesPic">
          <img src={trio} alt="nelson picture" />
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

// group members
function Members({ name, title, description, picture, fb, ig, twitter }) {
  return (
    <section className="memberSection">
      <div className="aboutUs-container-member">
        {/* bosss ligs */}

        <div className="member-pic">
          <img src={picture} height={300} alt="james picture" />
        </div>

        <div className="content-member">
          <div className="member-info"></div>
          <h2 className=""> {name}</h2>
          <h2 className="member-description">
            {title}
            <br />
          </h2>
          <p className="member-atik">{description}</p>
        </div>

        <div className="socmed">
          <span className="socmed1">
            <a href={fb} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="facebook" />
            </a>
          </span>

          <span className="socmed1">
            <a href={ig} target="_blank" rel="noopener noreferrer">
              {" "}
              <FaInstagram className="instag" />
            </a>
          </span>
          <span className="socmed1">
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="twitter" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
function MembersContainer() {
  return (
    <>
      <div className="grid-members">
        {membersData.map((members) => (
          <Members key={members.id} {...members} />
        ))}
      </div>
    </>
  );
}

// About us
function AboutUs({ sideTitle, firstParagraph, secondParagraph, technologies }) {
  return (
    <>
      {/* About Us */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="left-side">
            <h1>{sideTitle}</h1>
          </div>
          <div className="right-side">
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>

            <div className="tech-stack">
              <h4 className="core-tech">CORE TECHNOLOGIES:</h4>
              <div className="mern">
                {technologies.map((tech, index) => (
                  <span key={index}>{...tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function AboutUsContainer() {
  return (
    <>
      {aboutUsData.map((aboutUs) => (
        <AboutUs key={aboutUs.id} {...aboutUs} />
      ))}
    </>
  );
}

/* services */
function Services({ icons, servicesTitle, description }) {
  const Icon = icons;

  return (
    <>
      <div>
        <Icon className="icon1" /> <br />
        <span>
          <h3>{servicesTitle}</h3>
        </span>
        <p>{description}</p>
      </div>
    </>
  );
}
function ServicesContainer() {
  return (
    <>
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
            {servicesData.map((servsData) => (
              <Services key={servsData.id} {...servsData} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// skills
function Skills({ icon, skillsTitle, techStack }) {
  const Icon = icon;
  return (
    <>
      <div className="front-end">
        <div className="yawa">
          <div className="to-grid">
            <div className="piste">
              <Icon className="logo-subtt" />
              <h3 className="tech1"> {skillsTitle}</h3>
            </div>

            <div className="mga-skills">
              {techStack.map((techs, index) => (
                <span key={index}>{...techs}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SkillsContainer() {
  return (
    <>
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
              <div className="title-col">
                <div className="tech">
                  <h2>Tech Stack</h2>
                </div>
                <div className="design">
                  <h2>Design & Testing Tools</h2>
                </div>

                {skillsData.map((techs) => (
                  <Skills key={techs.id} {...techs} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// System Section
function Systems({
  systemImage,
  systemCategory,
  systemTitle,
  systemDescription,
  keyFeatures,
  techStackUsed,
}) {
  return (
    <>
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
              <img src={systemImage} alt="system image" width={500} />
              <div className="aboutSystem">
                <p>{systemCategory}</p>
                <h1>{systemTitle}</h1>
                <p>{systemDescription}</p>
                <div className="features">
                  <h2>Key Features</h2>
                  <div className="features-inside">
                    <ul>
                      {keyFeatures.map((feature, index) => (
                        <li key={index}>{feature} </li>
                      ))}
                    </ul>
                  </div>

                  <div className="stacks-used">
                    {techStackUsed.map((techStack, index) => (
                      <span key={index}>{techStack}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function SystemsContainer() {
  return (
    <>
      {systemsData.map((system) => (
        <Systems key={system.id} {...system} />
      ))}
    </>
  );
}

// Contact section
function Contact({ email, mobileNum, locations, projects }) {
  return (
    <>
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
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision. Whether you need
                    a full-stack developer, UI/UX designer, or Web3 specialist,
                    I'm here to help.
                  </p>
                  <div className="contact-info">
                    <div className="email">
                      <div>
                        <FaEnvelope className="contact-icon" />
                      </div>
                      <div className="icon-title-loc">
                        <div className="email-font">Email</div>
                        {email.map((emails, index) => (
                          <div className="mail" key={index}>
                            {...emails}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="phone">
                      <div>
                        <FaPhone className="contact-icon" />
                      </div>

                      <div className="icon-title-loc">
                        <div className="phone-font">Phone</div>

                        {mobileNum.map((number, index) => (
                          <div className="phon" key={index}>
                            {...number}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="location">
                      <div>
                        <FaMapMarkerAlt className="contact-icon" />
                      </div>
                      <div className="icon-title-loc">
                        <div className="location-font">Location</div>
                        {locations.map((location, index) => (
                          <div className="loc" key={index}>
                            {...location}{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="projects">
                  <div className="projects-grid">
                    <div className="projects-title">
                      <p>Available for:</p>
                      <div className="to-grid-projects">
                        {projects.map((project, index) => (
                          <span className="span-projects" key={index}>
                            <p>{...project}</p>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
    </>
  );
}
function ContactContainer() {
  return (
    <>
      {contactData.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </>
  );
}

// main container
function MainContainer() {
  return (
    <>
      
      <main id="home">
        <Home />
        <MembersContainer />
        <AboutUsContainer />
        <ServicesContainer />
        <SkillsContainer />
        <SystemsContainer />
        <ContactContainer />
      </main>
    </>
  );
}

//Footer section
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div>
            <p>&copy; 2026 Kulokuys. All Rights Reserved.</p>
          </div>
          Built with React + Vite, CSS. Designed by Kulokuys.
        </div>
      </footer>
    </>
  );
}






// final boss
function App() {
  return (
    <>
      <Header />

      <MainContainer />

      <Footer />
    </>
  );
}

export default App;
