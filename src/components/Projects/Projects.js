import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import campus from "../../Assets/Projects/campus.png";
import codetocuisine from "../../Assets/Projects/codetucuisine.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codetocuisine}
              isBlog={false}
              title="🍽️ Code to Cuisine — A QR-Based Restaurant Menu System"
              description="Code to Cuisine is a modern, user-friendly web application designed to transform the traditional dining experience. It allows customers to seamlessly browse a restaurant’s digital menu by simply scanning a QR code placed on their table — eliminating the need for printed menus or human interaction in the ordering phase."
              ghLink="https://github.com/RachitRawat09/Minnor_Project-"
              demoLink="https://resturentapp.free.nf/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus}
              isBlog={false}
              title="🌐 Campus Connect"
              description="Campus Connect is a MERN-based campus-exclusive marketplace where students can buy and sell second-hand academic items like books and electronics. Users sign up using verified college emails or IDs, ensuring a trusted community. It features secure login, real-time chat, search/filter listings, and a rating system to build seller credibility. Admin tools allow for managing reports and monitoring platform activity."
              ghLink="https://github.com/RachitRawat09/Idea_hackathon"
              demoLink="#"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
