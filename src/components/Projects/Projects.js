import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import campus from "../../Assets/Projects/campus.png";
import inventory from "../../Assets/Projects/logo.jpeg"
import codetocuisine from "../../Assets/Projects/codetucuisine.png"
import green from "../../Assets/Projects/green.png"

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={green}
              isBlog={false}
              title="👜 Green Cart"
              description="Green Cart is a MERN-based online marketplace dedicated to sustainable products. It connects eco-conscious consumers with sellers offering environmentally friendly goods, such as reusable items, organic products, and upcycled materials. Users can browse, search, and filter listings, engage in real-time chat with sellers, and leave reviews to promote trust within the community. The platform also includes admin tools for managing reports and monitoring activity to ensure a safe and positive shopping experience."
              ghLink="https://github.com/sak-shar00/Green-Cart"
              demoLink="https://green-cart-frontend-0p3u.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="🔍 Inventory Management System"
              description="A web-based inventory management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows businesses to efficiently track and manage their inventory in real-time. The sytem keep track which inventory is assigned to whom. Role based access control is implemented for security purpose using JWT token."
              ghLink="https://github.com/RachitRawat09/storemanagement"
              demoLink="https://coefm-storemanagement.onrender.com/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
