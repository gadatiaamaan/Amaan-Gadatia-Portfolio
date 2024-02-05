import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';

// Container for the entire footer section
const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  // Background gradient commented out for clarity
  // background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

// Wrapper for the footer content with max width and styling
const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

// Logo styling
const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

// Navigation styling
const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

// Navigation links styling
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Social media icons container styling
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

// Individual social media icon styling
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// Copyright text styling
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

// Footer component function
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Amaan Gadatia</Logo>
        <Nav>
          {/* Navigation links */}
          <NavLink href="#aboutme">About Me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contactme">Contact Me</NavLink>
        </Nav>
        {/* Social media icons */}
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><GithubIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        {/* Copyright text */}
        <Copyright>
          &copy; 2024 Amaan Gadatia. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
