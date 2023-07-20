import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticket = setInterval(() => {
      tick();
    }, delta);      

    return () => {
      clearInterval(ticket);
    };
  },);

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
              Hi, I am Jabed Hossain<span className="wrap"><br/> {text}</span>
            </h1>
            <p>
              As a PHP and Laravel web developer, I excel in creating dynamic web applications. With PHP's server-side scripting 
              and the Laravel framework's power, I deliver scalable and feature-rich websites. I handle backend functionality, 
              database interactions, and customization with ease. Using Laravel's MVC architecture, I create interactive interfaces, implement 
              secure authentication systems, and process data efficiently. With expertise in Laravel's ecosystem, including Eloquent ORM and Blade 
              templating, I optimize website performance and user experience. My clean and maintainable code ensures scalability and adherence to 
              industry standards. I specialize in crafting efficient, secure, and customized web solutions for businesses and users.
            </p>
            <button onClick={() => console.log("Connect")}>
              Lets Connect <ArrowRightCircle size={25} />
            </button>
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
