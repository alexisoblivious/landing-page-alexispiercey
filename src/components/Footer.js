// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  margin-top: auto;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>Alexis Piercey &copy; 2024</FooterText>
  </FooterContainer>
);

export default Footer;
