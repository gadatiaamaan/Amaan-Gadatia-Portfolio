// Import necessary dependencies from styled-components and react-router-dom
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

// Styling for the main navigation container
export const Nav = styled.div`
    background-color: ${({theme}) => theme.card};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 5;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

// Styling for the main container of the navbar
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

// Styling for the logo in the navbar
export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

// Styling for a custom span element in the navbar
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

// Styling for the list of navigation items
export const NavItems = styled.ul`
    width: 115%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content:center;
    gap: 2rem;
    padding: 0 6px;
    list-style: none;
    font-size: 17px;
    min-width: 800px;
    @media screen and (max-width: 800px) {
      display: none;
    }
`;

// Styling for individual navigation links
export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

// Styling for the LinkedIn button
export const LinkedInButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 9px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_primary};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

// Styling for a container for buttons in the navbar
export const DarkModeButton = styled.div`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  width: 70px;
  border-radius: 100%;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};     
  }
  @media screen and (max-width: 768px) { 
    display: none;
  }
`;

// Styling for a container for buttons in the navbar
export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Styling for the mobile menu icon
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

// Styling for the mobile menu container
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

// Styling for the mobile menu items container
export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

// Styling for individual mobile menu links
export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

// Styling for the mobile menu button
export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

// Styling for individual mobile links
export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

// Styling for the mobile logo
export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Toggle = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  width: 35px;
  border-radius: 100%;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  background: ${({ theme }) => theme.bg};
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};   
  }
  @media screen and (max-width: 768px) { 
  font-size: 14px;
  } 
`;

export const StyledLink = styled(LinkR)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px; /* Remove the quotes around the value */
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;
