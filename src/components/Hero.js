// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: url('/hero-img.png') no-repeat center center;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 48px;
`;

const Hero = () => (
  <HeroContainer>
    <HeroText>constructing creativity</HeroText>
  </HeroContainer>
);

export default Hero;
