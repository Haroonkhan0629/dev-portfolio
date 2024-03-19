import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import finch from "../../Assets/Projects/Screen Shot 2024-03-16 at 2.31.47 PM.png";
import emoji from "../../Assets/Projects/Screen Shot 2024-03-19 at 11.53.46 AM.png";
import fit2go from "../../Assets/Projects/Screen Shot 2024-03-16 at 9.16.48 PM.png";
import fit2gopro from "../../Assets/Projects/Screen Shot 2024-03-19 at 11.57.22 AM.png";
import drhealth from "../../Assets/Projects/Screen Shot 2024-03-16 at 3.24.43 PM.png";

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
              imgPath={fit2gopro}
              isBlog={false}
              title="Fit2Go-Pro"
              description="Engineered a mobile based Full-Stack Fitness Application utilizing UX/UI Design principles, User Authentication, saved data, simple navigation and databases for a dynamically built Website."
              ghLink="https://github.com/Haroonkhan0629/nutrition-frontend"
              demoLink="https://fit2go-pro.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finch}
              isBlog={false}
              title="The Finch Collector"
              description="Manufactured a responsive Full-Stack Collector Application administering uniquely built in features for an interactive and UX/UI Designed Website."
              ghLink="https://github.com/Haroonkhan0629/finch_collector"
              demoLink="https://finch-collector-a586.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drhealth}
              isBlog={false}
              title="Dr. Health"
              description="Directed the production of a Full-Stack Health Application as the Front-End Lead in collaboration with Back-End Engineers to generate a cooperative Website."
              ghLink="https://github.com/Haroonkhan0629/DrHealthFrontEnd/tree/main"
              demoLink="https://cerulean-puppy-08071b.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit2go}
              isBlog={false}
              title="Fit2Go"
              description="Constructed a functional Full-Stack Fitness Application handling User Authentication, saved data, straightforward navigation and databases for a distinct Website."
              ghLink="https://github.com/Haroonkhan0629/Fit2Go"
              demoLink="https://fit2go-gtmn.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoji}
              isBlog={false}
              title="Emoji-Man"
              description="Assembled a fully responsive hangman variation game implementing optimal programming practices."
              ghLink="https://github.com/Haroonkhan0629/hangmanProject"
              demoLink="https://haroonkhan0629.github.io/hangmanProject/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
