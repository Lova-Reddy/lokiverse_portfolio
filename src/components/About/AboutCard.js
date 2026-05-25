import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Dwarampudi Lova Reddy</span>, a 21-year-old
            <span className="purple"> BTech CSE </span> student (7th semester, CGPA <span className="purple">8.7</span>) at Aditya University.
            <br />
            I build full-stack web platforms and AI-augmented developer tools — from
            <span className="purple"> Tauri/Rust desktop apps </span> to MERN production deployments.
            <br />
            <br />
            Interned at <span className="purple">Accenture</span> (May–July). Currently shipping
            <span className="purple"> Servera</span>,
            <span className="purple"> WorkPing</span>, and
            <span className="purple"> LastLine</span>.
            <br />
            <br />
            Outside of code:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI agents & LLM workflows
            </li>
            <li className="about-activity">
              <ImPointRight /> Open source + side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build tools people actually use."{" "}
          </p>
          <footer className="blockquote-footer">Lova Reddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
