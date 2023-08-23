import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projectslist } from "./Projects_list";

export const Projects = () => {
  const projects = [
    {
      title: "One Health",
      description: "Online Healthcare Management System using Laravel",
      imgUrl: projImg1,
      githubUrl:
        "https://github.com/JabedHossainSwe/Online-Health-Care-Full-Project.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p style={{ textAlign: "justify" }}>
                    I am a versatile developer with expertise in healthcare
                    solutions, React ToDo App, and various PHP-based systems. My
                    Online Health Care platform facilitates virtual medical
                    assistance from licensed doctors, while the ToDo App
                    enhances task management. The Online Birth Certificate,
                    Covid-19 Testing, and Daily Expense Tracker systems
                    streamline administrative tasks and essential services.
                    Additionally, I developed a Chatbot for seamless
                    communication and an Online Examination System for academic
                    efficiency. In the finance sector, my Online Banking System
                    offers secure transactions, and the Student Project
                    Allocation system optimizes resource allocation. Lastly, the
                    Online Ticket Reservation system simplifies travel booking.
                    My projects prioritize user experience and practicality
                    across domains.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects Images</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <ul>
                          {projectslist.map((project, index) => (
                            <li key={index}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "baseline",
                                }}
                              >
                                <h6 style={{ marginRight: "0.5rem" }}>
                                  {project.title}
                                </h6>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on GitHub
                                </a>
                              </div>
                              <p>{project.description}</p>
                            </li>
                          ))}
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p style={{ textAlign: "justify" }}>
                          To develop into a highly knowledgeable and skilled
                          software engineer who specializes in creating,
                          creating, and implementing cutting-edge software
                          solutions. My goal is to consistently broaden my skill
                          set, take on new challenges, and stay current with the
                          most recent trends and innovations in the industry in
                          order to advance professionally. My ultimate goal
                          could be to create software that has a good impact on
                          people's lives and to meaningfully contribute to the
                          industry and society.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="backgroundImage"
      ></img>
    </section>
  );
};
