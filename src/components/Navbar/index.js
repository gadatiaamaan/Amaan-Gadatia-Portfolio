import React from 'react';
import { 
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
  LinkedInButton, ButtonContainer, DarkModeButton, MobileIcon, MobileMenu, MobileLink, Toggle, StyledLink
} from './NavbarStyled'; // Import styled components
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { themes } from '../../utils/Themes';


// Navbar component
function Navbar(props) {

  // State for dark mode
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } 
    else {
      props.setTheme("light");
    }
  };

  const StyledIcon = props.theme === 
    "light" ? <HiMoon size={25} 
      style={{ padding: '1px', marginTop: '2px' }} 
    /> : <CgSun size={25} 
      style={{ padding: '1px', marginTop: '2px' }} />;

  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu
  return (
    <Nav>
      {/* Navigation container */}
      <NavbarContainer>
        {/* Logo with a link to the home page */}
        <NavLogo to='/'>
          {/* Styled Link with logo and title */}
          <StyledLink>
            <DiCssdeck size="3rem" /> <Span>Gadatia Portfolio</Span>
          </StyledLink>

        </NavLogo>
        
        {/* Mobile menu icon */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        
        {/* Navigation items for larger screens */}
        <NavItems>
          <NavLink href="#aboutme">About Me</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contactme'>Contact Me</NavLink>
        </NavItems>
        {/* Light/Dark Mode button */}
        <DarkModeButton onClick={changeTheme}>
          {StyledIcon}
        </DarkModeButton>
        {/* Button container for LinkedIn profile */}
        <ButtonContainer>
          <LinkedInButton href={Bio.linkedin} target="_blank">LinkedIn Profile</LinkedInButton>
        </ButtonContainer>
        
        {/* Mobile menu - Displayed when the mobile icon is clicked */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {/* Mobile navigation links */}
            <MobileLink href="#aboutme" onClick={() => setIsOpen(!isOpen)}>About Me</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(!isOpen)}>Contact Me</MobileLink>
            
            {/* Light/Dark Mode button for mobile */}
            <Toggle onClick={changeTheme}>
              {StyledIcon}
            </Toggle>
            {/* LinkedIn profile button for mobile */}
            <LinkedInButton 
              style={{ 
                padding: '10px 16px',
                background: `${themes.primary}`, 
                width: 'max-content',
                color: `${themes.primary}`,
              }} 
              href={Bio.linkedin} 
              target="_blank"
            >
              LinkedIn Profile
            </LinkedInButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
