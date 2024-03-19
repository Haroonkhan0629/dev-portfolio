import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haroon Khan </span>
            from <span className="purple"> Shergarh, Pakistan.</span>
            <br />
            I have completed a Certificate in Software Engineering at General Assembly.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time with Family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Working hard is simple, but not easy."{" "}
          </p>
          <footer className="blockquote-footer">Haroon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
