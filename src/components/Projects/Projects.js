import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import servera from "../../Assets/Projects/codeEditor.png";
import workping from "../../Assets/Projects/chatify.png";
import lastline from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few production projects I've built and shipped.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={servera}
              isBlog={false}
              title="Servera"
              description="AI-powered SSH server management tool built with Tauri (Rust) + React. Async backend for concurrent sessions, multi-server terminal with parallel execution, real-time monitoring, Docker/firewall/port scanning/SFTP integration, OpsPilot to convert natural language into executable workflows (OpenAI, Gemini, Bedrock, Ollama). Secure architecture with OS keyring + SSH fingerprint verification."
              ghLink=""
              demoLink="https://servera.nixquest.me"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workping}
              isBlog={false}
              title="WorkPing"
              description="Smart attendance & workforce management platform replacing hardware systems with face recognition. Led backend (React, Express, MongoDB) — architecture, scalability, Meta WhatsApp + PhonePe integrations. All-in-one HR portal: attendance, team/project management, automated salary. Deployed in production at TechnicalHub."
              ghLink=""
              demoLink="https://workping.live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lastline}
              isBlog={false}
              title="LastLine"
              description="Full-stack email management platform with ML-based automated categorization. Python + Flask backend, React frontend, MongoDB + Express. Integrated Gmail API for secure email retrieval and real-time handling. Responsive UI for streamlined email organization."
              ghLink=""
              demoLink="https://lastline.life"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
