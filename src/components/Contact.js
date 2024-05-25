// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const ContactTitle = styled.h2`
  background-color: black;
  color: white;
  display: inline-block;
  padding: 5px 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input, textarea {
    width: 100%;
    max-width: 500px;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <ContactTitle>Contact Me</ContactTitle>
    <ContactForm>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows="5"></textarea>
      <button type="submit">Send</button>
    </ContactForm>
  </ContactContainer>
);

export default Contact;
