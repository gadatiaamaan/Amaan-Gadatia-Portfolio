// Import necessary dependencies and components
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { themes } from "./utils/Themes";

// Styled components for styling the body and wrapper
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  // State for managing dark mode and project modal
  const [theme, setTheme] = useState("dark");
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Logging the openModal state for debugging
  console.log(openModal)

  return (
    // ThemeProvider for handling theme switching
    <ThemeProvider theme={themes[theme]}>
      <Router >
        {/* Navigation Bar component */}
        <Navbar theme={theme} setTheme={setTheme} />

        <Body>
          {/* Introduction component */}
          <Introduction />
          <Wrapper>
            {/* Skills and Experience components wrapped in a styled wrapper */}
            <Skills theme={theme} />
            <Experience />
          </Wrapper>
          {/* Projects component with project modal functionality */}
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            {/* Education and Contact components wrapped in a styled wrapper */}
            <Education />
            <Contact />
          </Wrapper>
          {/* Footer component */}
          <Footer />
          {/* ProjectDetails component rendered conditionally based on openModal state */}
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

// Exporting the App component as the default export
export default App;
