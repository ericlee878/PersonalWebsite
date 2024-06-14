import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Email: <a href="mailto:ericlee2026@u.northwestern.edu">ericlee2026@u.northwestern.edu</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/hyungkeun-eric-lee/" target="_blank" rel="noopener noreferrer">Eric Lee</a></p>
    </div>
  );
};

export default Contact;
