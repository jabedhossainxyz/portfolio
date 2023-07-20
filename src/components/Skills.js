import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
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
                As an experienced PHP developer, my expertise lies in
                server-side web development using PHP, a versatile scripting
                language. With PHP, I handle dynamic content generation,
                database interactions, and form processing on the server,
                delivering robust web applications. Working with PHP, I build
                back-end logic and APIs that power web application
                functionality. I manage user authentication, data validation,
                and server-side form processing, ensuring secure and reliable
                web services. Proficient in MySQL, I design and manage
                databases, perform complex data queries, and efficiently store
                and retrieve information for web applications. As a full-stack
                developer, I possess front-end skills in HTML, CSS, and
                JavaScript, creating user-friendly interfaces for seamless
                experiences across devices. Throughout my career, I have
                collaborated on diverse projects, delivering high-quality
                solutions tailored to client requirements. I optimize web
                application performance, implement caching strategies, and
                ensure efficient code execution for scalability and speed. In
                conclusion, my expertise in PHP, MySQL, and front-end
                technologies allows me to deliver end-to-end solutions for web
                applications. I am committed to staying updated with industry
                trends, continuously enhancing my skills to deliver innovative
                web solutions.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MYSQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Web Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
