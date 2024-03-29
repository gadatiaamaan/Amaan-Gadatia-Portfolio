import React from 'react'
import IntroductionBgAnimation from '../IntroductionBgAnimation'
import { IntroductionContainer, IntroductionBg, IntroductionLeftContainer, Img, IntroductionRightContainer, IntroductionInnerContainer, TextLoop, Title, Span, SubTitle, MenuButton, MenuButtonContainer } from './IntroductionStyle'
import IntroductionImg from '../../images/profile.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

// Functional component representing the introduction section of the portfolio
const Introduction = () => {
    return (
        <div id="aboutme">
            <IntroductionContainer>
                <IntroductionBg>
                    <IntroductionBgAnimation />
                </IntroductionBg>
                <IntroductionInnerContainer >
                    <IntroductionLeftContainer id="Left">
                        {/* Displaying the title with the name from Bio data */}
                        <Title>Hello, My Name is <br /> {Bio.name}</Title>
                        {/* Using TextLoop for dynamic rendering of roles from Bio data */}
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        {/* Displaying the description from Bio data */}
                        <SubTitle>{Bio.description}</SubTitle>
                            
                        <MenuButtonContainer>
                            {/* Creating a button to view the resume */}
                            <MenuButton href={Bio.resume} target='display'>  View My Resume  </MenuButton>
                            {/* Creating a button to contact with a link to the contact section */}                                    
                            <MenuButton href='#contactme'>Contact Me Today!</MenuButton>
                        </MenuButtonContainer>
                    </IntroductionLeftContainer>
                    <IntroductionRightContainer id="Right">
                        {/* Displaying the introduction image */}
                        <Img src={IntroductionImg} alt="introduction-image" />
                    </IntroductionRightContainer>
                </IntroductionInnerContainer>
            </IntroductionContainer>
        </div>
    );
}

export default Introduction; // Exporting the Introduction component
