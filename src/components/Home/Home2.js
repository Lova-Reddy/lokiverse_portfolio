import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_image_2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">BTech CSE</b> student (7th sem, CGPA 8.7) at Aditya University, building full-stack and AI-driven products.
              <br />
              <br />
              Fluent in
              <i>
                <b className="purple"> JavaScript, Python, Java, C/C++ </b>
              </i>
              and exploring
              <i>
                <b className="purple"> Rust </b>
              </i>
              via Tauri.
              <br />
              <br />
              Interests:
              <i>
                <b className="purple"> Web Platforms, Developer Tools, and AI-powered Workflows </b>
              </i>
              — shipped products integrating
              <b className="purple"> OpenAI, Gemini, Bedrock, Ollama </b>
              and Meta WhatsApp / PhonePe APIs.
              <br />
              <br />
              Stack of choice:
              <i>
                <b className="purple"> React, Node.js, Express, MongoDB, Flask </b>
              </i>
              with
              <i>
                <b className="purple"> Tauri + Rust </b>
              </i>
              for desktop.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lova-reddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lovareddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:lovareddy.stu@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+917337252906"
                  className="icon-colour  home-social-icons"
                >
                  <FaPhoneAlt />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
