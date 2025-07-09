import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritik Singh Rawat </span>
            from <span className="purple"> Uttrakhand, India.</span>
            <br />
            I am currently final year student and intern at CSIR CMERI.
            <br />
            I an persuing my B.Tech in Information Technology from   
            <span className="purple"> Guru Nanak Dev Engineering College, Ludhiana.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am not worry for future , I am worry that future is too far !!"{" "}
          </p>
          <footer className="blockquote-footer">Ritik Singh Rawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
