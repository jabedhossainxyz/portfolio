import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img5.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/leomart.png";
import projImg7 from "../assets/img/schoobee.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projectslist } from "./Projects_list";

export const Projects = () => {
  const projects = [
    {
      title: "Sustainable Coastal & Marine Fisheries Project",
      description:
        "Under Department of Fisheries, Matshya Bhaban, Dhaka,Bangladesh",
      imgUrl: projImg1,
    },
    {
      title: "Leomart",
      description: "E-Commerce Management System using Laravel",
      imgUrl: projImg6,
    },
    {
      title: "Schoobee BD",
      description: "Education Management System using HTML,CSS,JS,AJAX,Bootstrap & SQL",
      imgUrl: projImg7,
    },
    {
      title: "One Health",
      description: "Online Healthcare Management System using Laravel",
      imgUrl: projImg2,
    },
    {
      title: "TODO Application",
      description: "ToDo application using PHP",
      imgUrl: projImg3,
    },
    {
      title: "Online Ticket Reservation System",
      description: "This application was built using PHP & MYSQL",
      imgUrl: projImg4,
    },
    {
      title: "Student Record Management System",
      description: "This application was built using PHP & MYSQL",
      imgUrl: projImg5,
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
                    I excel in developing and fixing PHP and Laravel projects with Oracle databases, including PGCL, Notre Dame College Application System, Bangladesh Gas Fields School & College, and BPDB Pharmacy. Additionally, I have expertise in creating healthcare solutions and React ToDo Apps.
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
                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View on GitHub
                                  </a>
                                )}
                                {project.Url && !project.githubUrl && (
                                  <a
                                    href={project.Url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    URL
                                  </a>
                                )}
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
                          My goal is to develop into a highly skilled software engineer specializing in creating and implementing cutting-edge software solutions. I aim to continuously broaden my skill set, take on new challenges, and stay current with industry trends and innovations. Ultimately, I aspire to create impactful software that benefits people's lives and contributes meaningfully to the industry and society.
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
