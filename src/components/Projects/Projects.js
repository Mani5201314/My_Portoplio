import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import KinghtBite from "../../Assets/Projects/KnightBite.png";
import Library from "../../Assets/Projects/Library.png";
import Pixabay from "../../Assets/Projects/pixabay.png";
import youtube from "../../Assets/Projects/youtude.png";
import Ammas from "../../Assets/Projects/ammas .png";
import Flipkart from "../../Assets/Projects/Flipkart.png";
import Indegene from "../../Assets/Projects/indegene.png";
import Shaadi from "../../Assets/Projects/Shaadi.png";
import NPM from "../../Assets/Projects/NPM.png";
import Zee5 from "../../Assets/Projects/Zee5.png";
import KSRTC from "../../Assets/Projects/KSRTC.png";
import school_management from "../../Assets/Projects/school-management.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KinghtBite}
              isBlog={false}
              title="KinghtBite"
              description="This code creates a basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements. Knight Bite is a food delivery app which will help anyone to get their favorite meal without going out of their current place."
              ghLink="https://github.com/Mani5201314/Kinght_Bite"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library"
              description="
This code creates a basic website using React, you'll typically set up a React project using tools like Create React App, and then build your components and UI using React's component-based architecture."
              ghLink="https://github.com/Mani5201314/bookstores"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pixabay}
              isBlog={false}
              title="pixabay"
              description="Pixabay is a platform where you can find and download over 4.4 million+ royalty-free images, videos, music and other media."
              ghLink="https://github.com/Mani5201314/pixabay"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="youtube"
              description="This code creates a basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements. Using Reactjs Update & Delete Data in this website."
              ghLink="https://github.com/Mani5201314/youtude"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school_management}
              isBlog={false}
              title="School-management"
              description="This Application using reactjs, this application is using 'BrowserRouter' in single-page applications."
              ghLink="https://github.com/Mani5201314/school-management-system"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ammas}
              isBlog={false}
              title="Amma's pastry"
              description="This code creates a basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements.Amma's pastry is a platform that lets you order Cakes."
              ghLink="https://github.com/Mani5201314/CakeShop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flipkart}
              isBlog={false}
              title="Flipkart"
              description="This code creates a basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements. Using Position Attribute in css. "
              ghLink="https://github.com/Mani5201314/flipkart"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Indegene}
              isBlog={false}
              title="Indegene"
              description="This also one basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements. "
              ghLink="https://github.com/Mani5201314/indegene"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shaadi}
              isBlog={false}
              title="Shaadi"
              description="This code creates a basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements."
              ghLink="https://github.com/Mani5201314/Shaadi"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NPM}
              isBlog={false}
              title="NPM"
              description="This code creates a basic website using React, you'll typically set up a React project using tools like Create React App, and then build your components and UI using React's component-based architecture in Single-page applications."
              ghLink="https://github.com/Mani5201314/NPM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zee5}
              isBlog={false}
              title="Zee5"
              description="This also one basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements. Using Carousel in BootStrap"
              ghLink="https://github.com/Mani5201314/Zee5"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KSRTC}
              isBlog={false}
              title="KSRTC"
              description="This also one basic webpage with a header, navigation bar, section content, and footer. The CSS styles the layout and appearance of the elements."
              ghLink="https://github.com/Mani5201314/Ksrtc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
