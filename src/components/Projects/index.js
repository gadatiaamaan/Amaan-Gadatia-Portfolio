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
          Here's a collection of projects I've built spanning AI agents, full-stack web apps, mobile development, and more. Each one reflects my drive to solve real problems through thoughtful engineering.
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
          {toggle === 'Front-End Development' ? (
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
          <Divider />
          {toggle === 'Mobile Development' ? (
            <ToggleButton active value="Mobile Development" onClick={() => setToggle('Mobile Development')}>
              Mobile Development
            </ToggleButton>
          ) : (
            <ToggleButton value="Mobile Development" onClick={() => setToggle('Mobile Development')}>
              Mobile Development
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'AI / Machine Learning' ? (
            <ToggleButton active value="AI / Machine Learning" onClick={() => setToggle('AI / Machine Learning')}>
              AI / Machine Learning
            </ToggleButton>
          ) : (
            <ToggleButton value="AI / Machine Learning" onClick={() => setToggle('AI / Machine Learning')}>
              AI / Machine Learning
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
