import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Order from "../../Assets/Projects/secure-login-concept-illustration_114360-4511.jpg";
import Task from "../../Assets/Projects/persons-discussing-work-process-flat-illustration-business-planning_203633-6517.jpg";
import Uniform from "../../Assets/Projects/happy-people-buying-clothes-online_74855-5860.avif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center" , width:"100%"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Order}
              isBlog={false}
              title="Order Mangement System"
              description="Developing an Order Management System using React.js, Material-UI, Express.js, and AWS, our solution empowers users with a sophisticated dashboard for seamless order manipulation via intuitive UI or Excel integration. With automated systems for generating quotes, invoices, and reports, coupled with email integration, our platform ensures efficiency, accuracy, and professionalism in every transaction"  />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              isBlog={false}
              title="Task Mangement System"
              description="Crafting a Task Management System utilizing React.js, Material-UI, Express.js, and AWS, our solution centralizes task creation and distribution. Administrators efficiently assign tasks to relevant departments and facilitate seamless communication through email notifications. Assigned personnel track task progress and provide updates, ensuring transparency and accountability. The system's robust reporting capabilities offer valuable insights for strategic decision-making, enhancing productivity and professionalism across the organization."
              
            />
          </Col>
           <Col md={4}  className="project-card">
            <ProjectCard
              imgPath={Uniform}
              isBlog={false}
              title="Uniform Management System"
              description="The Uniform Management System, built with React.js for frontend and AWS for backend services, streamlines uniform management for organizations. Features include user authentication, a catalog for items, order and inventory management, robust reporting, and integration with AWS services like Cognito for authentication, RDS for data storage, S3 for file storage, and SES for email notifications. This system enhances efficiency, scalability, security, and provides valuable insights for decision-making"
               
            /> 
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
