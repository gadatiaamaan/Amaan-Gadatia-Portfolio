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
          Project description goes here. Project description goes here. Project description goes here.
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
          {toggle === 'Category 1' ? (
            <ToggleButton active value="Category 1" onClick={() => setToggle('Category 1')}>
              Category 1'S
            </ToggleButton>
          ) : (
            <ToggleButton value="Category 1" onClick={() => setToggle('Category 1')}>
              Category 1'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Category 2' ? (
            <ToggleButton active value="Category 2" onClick={() => setToggle('Category 2')}>
              Category 2'S
            </ToggleButton>
          ) : (
            <ToggleButton value="Category 2" onClick={() => setToggle('Category 2')}>
              Category 2'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Category 3' ? (
            <ToggleButton active value="Category 3" onClick={() => setToggle('Category 3')}>
              Category 3
            </ToggleButton>
          ) : (
            <ToggleButton value="Category 3" onClick={() => setToggle('Category 3')}>
              Category 3
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
