import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';

export default function Project({ projects }) {
  return (
    <div className="container">
      <h1 style={{ color: '#ebf0f6' }}>My Portfolio</h1>
      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.id}>
            <div className="card mb-4">
            <img src={project.image} alt={project.title} className="img-fluid" style={{ height: 200 }} />
              <h2>
                <a href={project.link} className="text-decoration-none text-reset">
                  <span>{project.title}</span>
                </a>&nbsp;
                <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </h2>
              <p>{project.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}