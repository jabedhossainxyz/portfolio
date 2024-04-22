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
                  <p>Company Name: Leotech</p>
                  <p>Location: Panthapath, Dhaka, Bangladesh</p>
                  <p>Duration: June 2023 - January 2024</p>
                  <ul>
                    <li>
                      Developed and maintained web applications using HTML, CSS, Bootstrap, JavaScript, AJax for
                      front-end and PHP for back-end.
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
                  <h4>Projects:</h4>
                  <ul>
                    <li>Project 1: E-commerce Website</li>
                    <ul>
                      <li>
                        Developed this site using Laravel.
                      </li>
                      <li>
                        Implemented product catalog, cart, and checkout
                        functionalities.
                      </li>
                    </ul>
                    <li>Project 2: CRM System</li>
                    <ul>
                      <li>Designed database schema using MySQL.</li>
                      <li>
                        Developed user interface using React and integrated with
                        back-end APIs.
                      </li>
                    </ul>
                  </ul>
                </div>
                {/* Add more experience items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
