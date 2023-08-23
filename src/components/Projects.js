import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
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
    },
    {
      title: "TODO Application",
      description: "ToDo application using PHP",
      imgUrl: projImg2,
    },
    {
      title: "Online Ticket Reservation System",
      description: "This application was built using PHP & MYSQL",
      imgUrl: projImg3,
    },
    {
      title: "Student Record Management System",
      description: "This application was built using PHP & MYSQL",
      imgUrl: projImg4,
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
                    With a versatile skill set, I excel in healthcare solutions,
                    React ToDo App, and diverse PHP-based systems. My Online
                    Health Care platform connects users with licensed medical
                    professionals virtually, while the ToDo App streamlines task
                    management. I've contributed to projects like the Online
                    Birth Certificate, Covid-19 Testing, and Daily Expense
                    Tracker systems, enhancing administrative efficiency. My
                    work includes a Chatbot for seamless communication and an
                    Online Examination System for academic optimization. In
                    finance, my Online Banking System ensures secure
                    transactions, and the Student Project Allocation system aids
                    resource distribution. Lastly, the Online Ticket Reservation
                    system simplifies travel bookings. Currently, I'm engaged in
                    an Ebook application project with AI integration, leveraging
                    PHP and MySQL. My projects emphasize user experience and
                    practicality, delivering innovative solutions across various
                    domains.
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
