import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["PHP", "&", "Laravel Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticket = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticket);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="taglink">Welcome to my portfolio</span>
            <h1>
              Hi, I am Jabed Hossain
              <span className="wrap" style={{ color: "goldenrod" }}>
                <br /> {text}
              </span>
            </h1>
            <p style={{ textAlign: "justify" }}>
              As a proficient PHP and Laravel web developer, I specialize in
              crafting dynamic web applications. Leveraging PHP's server-side
              scripting and the robust capabilities of the Laravel framework, I
              deliver scalable and feature-rich websites. My expertise extends
              to backend functionality, database interactions, and seamless
              customization. In addition to my proficiency in PHP and Laravel,
              I've embraced modern front-end technologies like React. This
              enables me to create interactive interfaces, implement secure
              authentication systems, and optimize data processing. With
              in-depth knowledge of Laravel's ecosystem, including Eloquent ORM
              and Blade templating, I prioritize enhancing website performance
              and user experience. My coding approach emphasizes cleanliness and
              maintainability, ensuring scalability and alignment with industry
              standards. Notably, I excel in providing tailored web solutions
              that seamlessly blend efficiency, security, and customization to
              cater to the unique needs of businesses and users.
            </p>

            <a
              href="https://www.linkedin.com/in/jabedhossain"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="vvd">
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
