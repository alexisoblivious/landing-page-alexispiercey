// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const AboutTitle = styled.h2`
  background-color: black;
  color: white;
  display: inline-block;
  padding: 5px 10px;
`;

const AboutText = styled.p`
  margin: 20px 0;
  font-size: 18px;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer id="about">
    <AboutTitle>About Me</AboutTitle>
    <AboutText>
      My name is Alexis Piercey. I'm a web developer. Something something and something more about me.
    </AboutText>
  </AboutContainer>
);

export default About;
