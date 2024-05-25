// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color: black;
  color: white;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  background-color: black;
  color: white;
  display: inline-block;
  padding: 5px 10px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProjectItem = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

const projects = [
  { title: 'Project 1', image: 'path-to-image1.jpg', link: 'https://link-to-project-one.com' },
  { title: 'Project 2', image: 'path-to-image2.jpg', link: 'https://link-to-project-two.com' },
  { title: 'Project 3', image: 'path-to-image3.jpg', link: 'https://link-to-project-three.com' },
  { title: 'Project 4', image: 'path-to-image4.jpg', link: 'https://link-to-project-four.com' },
  { title: 'Project 5', image: 'path-to-image5.jpg', link: 'https://link-to-project-five.com' },
  { title: 'Project 6', image: 'path-to-image6.jpg', link: 'https://link-to-project-six.com' },
];

const Projects = () => (
  <ProjectsContainer id="projects">
    <ProjectsTitle>Projects</ProjectsTitle>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectItem key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
          </a>
        </ProjectItem>
      ))}
    </ProjectsGrid>
  </ProjectsContainer>
);

export default Projects;
