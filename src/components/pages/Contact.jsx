import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const Styles = {
    color: {
      color: "#ebf0f6"
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, e.g. API call or email send
    console.log(`Form submitted: ${name}, ${email}, ${message}`);
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <h1 style={Styles.color} className="display-4">Contact Me</h1>
      <p style={Styles.color} className="lead">Fill out the form below!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={Styles.color} for="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={Styles.color} for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={Styles.color} for="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Send Message
        </button>
      </form>
      {submitted ? (
        <p className="text-success">Thanks for reaching out! I'll get back to you soon.</p>
      ) : null}
    </div>
  );
};
