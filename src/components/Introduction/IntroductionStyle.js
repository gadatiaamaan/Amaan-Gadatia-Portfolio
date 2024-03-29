// Import styled-components library
import styled from "styled-components";

// Styled component for the container of the introduction section
export const IntroductionContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  // Media queries for responsive design
  @media (max-width: 1284px) {
    padding: 66px 16px;
  }

  @media (max-width: 1284) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

// Styled component for the background of the introduction section
export const IntroductionBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  // Media query for responsive design
  @media (max-width: 1284px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

// Styled component for the inner container of the introduction section
export const IntroductionInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  // Media query for responsive design
  @media (max-width: 1284px) {
    flex-direction: column;
  }
`;

// Styled component for the left container of the introduction section
export const IntroductionLeftContainer = styled.div`
  width: 100%;
  order: 1;

  // Media queries for responsive design
  @media (max-width: 1284px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1284px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Styled component for the right container of the introduction section
export const IntroductionRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;

  // Media queries for responsive design
  @media (max-width: 1284px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 1284px) {
    margin-bottom: 30px;
  }
`;

// Styled component for the image in the introduction section
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  // Media queries for responsive design
  @media (max-width: 1284px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 1284px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

// Styled component for the title in the introduction section
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  // Media queries for responsive design
  @media (max-width: 1284px) {
    text-align: center;
  }

  @media (max-width: 1284px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

// Styled component for the text loop in the introduction section
export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  // Media queries for responsive design
  @media (max-width: 1284px) {
    text-align: center;
  }

  @media (max-width: 1284px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

// Styled component for the span element in the introduction section
export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

// Styled component for the subtitle in the introduction section
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  // Media queries for responsive design
  @media (max-width: 1284px) {
    text-align: center;
  }

  @media (max-width: 1284px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

// Styled component for the resume button in the introduction section
export const MenuButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 225px;
  text-align: center;
  padding: 16px 10px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 20px;
  box-margin: 16px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: ${({ theme }) => theme.primary};
  box-shadow: 5px 5px 40px #4B0082;

  // Hover effect for the button
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  // Media query for responsive design
  @media (max-width: 1284px) {
    padding: 12px 0;
    min-width: 300px;
    height: 50px;
    width: 100%;
    top margin: 16px;
    font-size: 18px;
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 1284px) {
    flex-direction: column;
    max-width: 300px;
    align-items: center;
  }
`;