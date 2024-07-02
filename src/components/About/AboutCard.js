import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <h1 style={{ fontSize: "2.6em" }}>
      My Passion and Expertise in <span className="purple">Software Development</span>
            </h1>
            <p className="home-about-body">
              "I've developed a deep passion for programming, and my journey has been filled with continuous learning and growth. I'm fluent in classic languages like <b className="purple">JavaScript</b>  and Go, each offering unique perspectives on software development.
              <br />

              My interests lie in pioneering new web technologies and products, with a focus on leveraging <b className="purple">AWS cloud services</b> for scalable and reliable solutions. I find immense satisfaction in leveraging my skills with <b className="purple"> Node.js, along with modern JavaScript libraries and frameworks like React.js and Next.js,</b> to create impactful and user-centric applications.
              <br />
Programming isn't just a skill for me; it's a love affair that drives me to explore, innovate, and push the boundaries of what's possible in the digital realm." 🤷‍♂️
            I
            </p>
        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Payal Patel </span>
            <br />
            I have completed Master Of Computer Application  at Ganpat University India .
            <br />
           </p>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Good programming blends creativity and logic to craft efficient, scalable solutions."
          </p>
          <footer className="blockquote-footer">Payal Patel</footer>
        </blockquote> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
