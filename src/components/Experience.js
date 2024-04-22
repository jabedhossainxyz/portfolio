import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2>Professional Experience</h2>
              <div className="experience-details">
                <div className="experience-item">
                  <h3>Position: Jr. PHP & Laravel Developer</h3>
                  <p>
                    Company Name:{" "}
                    <a
                      href="https://leotechbd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leotech
                    </a>
                  </p>
                  <p>Location: Panthapath, Dhaka, Bangladesh</p>
                  <p>Duration: June 2023 - January 2024</p>
                  <ul>
                    <li>
                      Developed and maintained web applications using HTML, CSS,
                      Bootstrap, JavaScript, AJax for front-end and PHP for
                      back-end.
                    </li>
                    <li>
                      Designed and implemented efficient database structures
                      using MySQL.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      high-quality solutions tailored to client requirements.
                    </li>
                    <li>
                      Contributed to code reviews and provided technical
                      guidance to junior developers.
                    </li>
                  </ul>
                  <h4>Projects I've worked with Leotech:</h4>
                  <ul>
                    <li>
                      Project 1:{" "}
                      <a
                        href="http://leomart.leotechbd.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        E-commerce Website
                      </a>
                    </li>
                    <ul>
                      <li>Developed this site using Laravel.</li>
                      <li>
                        Implemented product catalog, cart, and checkout
                        functionalities.
                      </li>
                    </ul>
                    <br></br>
                    <li>
                      Project 2:{" "}
                      <a
                        href="https://www.leotechbd.com/school-management-software/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Education Management System
                      </a>
                    </li>
                    <ul>
                      <li>Designed database schema using SQL.</li>
                      <li>
                        Developed user interface using HTML, CSS, JavaScript,
                        Bootstrap, Ajax, PHP and integrated with back-end APIs.
                      </li>
                    </ul>
                    <br></br>
                    <li>
                      Project 3: {""}
                      <a
                        href="http://dof.leotechbd.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Database Management System for Department of Fisheries,
                        Matshya Bhaban, Bangladesh
                      </a>
                    </li>
                    <ul>
                      <li>This was a government project</li>
                      <li>Developed user interface using Livewire.</li>
                      <li>Designed database schema using MYSQL.</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
