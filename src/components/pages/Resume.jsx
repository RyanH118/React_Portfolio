import React from 'react';

export default function Resume() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <span>Download my</span> <a className="text-decoration-none" href="resume.pdf" download="Resume.pdf">resume</a>

      <div className="list-group">
        <h2 className="list-group-item-heading">Front-end Proficiencies</h2>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">Jquery</li>
          <li className="list-group-item">Responsive Design</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">Materialize</li>
        </ul>

        <h2 className="list-group-item-heading">Back-end Proficiencies</h2>

        <ul className="list-group">
          <li className="list-group-item">Node</li>
          <li className="list-group-item">API</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">MySQL, Sequelize</li>
          <li className="list-group-item">MongoDB, Mongoose</li>
          <li className="list-group-item">GraphQL</li>
        </ul>

      </div>
    </div>
  );
};