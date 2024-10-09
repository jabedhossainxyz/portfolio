import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jabedhossain" target="blank">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/jabedhossain.xyz"
                target="blank"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://instagram.com/jabedhossain.xyz" target="blank">
                <img src={navIcon3} alt="instagram" />
              </a>
              <a href="https://twitter.com/xabedhossain" target="blank">
                <img src={navIcon4} alt="twitter" />
              </a>
              <a href="https://github.com/jabedhossainxyz" target="blank">
                <img src={navIcon5} alt="github" />
              </a>
            </div>
            <p>
              Copyright 2023. All Rights Reserved to{" "}
              <a
                href="https://www.linkedin.com/in/jabedhossain"
                target="blank"
              >
                Jabed Hossain{" "}
              </a>{" "}
            </p>
            <p>
              If you're interested, you can mail me at{" "}
              <a href="mailto:jabed.swe@gmail.com">jabed.swe@gmail.com</a>
            </p>
            <p>OR</p>
            <p>
              Contact me at: <a href="tel:+1234567890">+8801305009069</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
