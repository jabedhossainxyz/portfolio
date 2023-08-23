import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p style={{ textAlign: "justify" }}>
                I bring extensive experience as a PHP developer, excelling in
                server-side web development with PHP's versatile scripting
                capabilities. My skills span dynamic content generation, robust
                database interactions, and secure form processing. Alongside
                PHP, I've ventured into modern front-end development using
                React, enhancing user interfaces with its component-based
                approach and efficient state management. My expertise in MySQL
                enables me to design and manage databases, conduct intricate
                data queries, and ensure seamless information retrieval. As a
                full-stack developer, I seamlessly integrate PHP and React,
                offering end-to-end solutions that optimize web application
                performance and user experience. Collaborating on diverse
                projects, I tailor solutions to meet client needs while
                implementing caching strategies for scalability. My proficiency
                in PHP, React, and front-end technologies underscores my
                commitment to delivering innovative web solutions. Continuously
                staying updated with industry trends, I'm dedicated to refining
                my skills to create cutting-edge web experiences. In summary, I
                offer a comprehensive skill set encompassing PHP, React, MySQL,
                and a holistic understanding of modern web development,
                delivering efficient, secure, and user-centric applications.
                <br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5>MYSQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter2" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter3" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter2" />
                  <h5>Laravel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-img"
      />
    </section>
  );
};
