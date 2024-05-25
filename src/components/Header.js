import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 18px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Alexis Piercey</Logo>
    <Nav>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </Nav>
  </HeaderContainer>
);

export default Header;