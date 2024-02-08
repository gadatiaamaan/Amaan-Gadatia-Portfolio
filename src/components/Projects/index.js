import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  // State to manage the toggle button selection
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Check out my various development projects, spanning from front-end, to back-end, to full-stack solutions! Each project showcases offers a glimpse into my passion for technology.
        </Desc>
        {/* Toggle buttons for project categories */}
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Web-Development' ? (
            <ToggleButton active value="Front-End Development" onClick={() => setToggle('Front-End Development')}>
              Front-End Development
            </ToggleButton>
          ) : (
            <ToggleButton value="Front-End Development" onClick={() => setToggle('Front-End Development')}>
              Front-End Development
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Back-End Development' ? (
            <ToggleButton active value="Back-End Development" onClick={() => setToggle('Back-End Development')}>
              Back-End Development
            </ToggleButton>
          ) : (
            <ToggleButton value="Back-End Development" onClick={() => setToggle('Back-End Development')}>
              Back-End Development
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Full-Stack Development' ? (
            <ToggleButton active value="Full-Stack Development" onClick={() => setToggle('Full-Stack Development')}>
              Full-Stack Development
            </ToggleButton>
          ) : (
            <ToggleButton value="Full-Stack Development" onClick={() => setToggle('Full-Stack Development')}>
              Full-Stack Development
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        {/* Project cards container */}
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
