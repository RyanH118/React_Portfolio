import React from 'react';

const Styles = {
  color: {
    color: "#ebf0f6"
  }
}

export default function Resume() {
  return (
    <div className="container">
      <h1 style={Styles.color}>Resume</h1>
      <span style={Styles.color}>Download my</span> <a className="text-decoration-none" href="resume.pdf" download="Resume.pdf">resume</a>

      <div className="list-group">
        <h2 style={Styles.color} className="list-group-item-heading m-3">Front-end Proficiencies</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">Jquery</li>
              <li className="list-group-item">Responsive Design</li>
              <li className="list-group-item">Bootstrap</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 style={Styles.color} className="list-group-item-heading m-3">Back-end Proficiencies</h2>
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
      </div>
    </div>
  );
};