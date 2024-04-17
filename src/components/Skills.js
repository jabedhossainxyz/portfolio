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
                Bringing extensive PHP development experience, I excel in
                server-side scripting, dynamic content generation, and secure
                form processing. I adeptly utilize React for modern front-end
                development, enhancing UIs with component-based structures and
                efficient state management. Proficient in MySQL, I design and
                manage databases, execute complex queries, and ensure seamless
                data retrieval. As a full-stack developer, I seamlessly
                integrate PHP and React, providing end-to-end solutions that
                optimize performance and user experience. Tailoring solutions to
                client needs, I implement caching strategies for scalability.
                Committed to innovation, I continuously refine my skills to
                deliver cutting-edge web experiences, emphasizing efficiency,
                security, and user-centric design.
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
