import React from 'react';
import styled from 'styled-components';

// Styled button component for projects
const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
    // Additional button styling
`;

// Styled container for each project card
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
    // Additional card styling
`;

// Styled image inside the card
const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    // Additional image styling
`;

// Styled container for project tags
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    // Additional tags container styling
`;

// Styled tag for individual project tags
const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
    // Additional tag styling
`;

// Styled container for project details
const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    // Additional details container styling
`;

// Styled title for the project
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    // Additional title styling
`;

// Styled date for the project
const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
    // Additional date styling
`;

// Styled description for the project
const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    // Additional description styling
`;

// Functional component for rendering each project card
const ProjectCard = ({ project, setOpenModal }) => {
    return (
        // Clickable card to open project modal
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            {/* Project image */}
            <Image src={project.image} />
            {/* Project tags */}
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag>{tag}</Tag>
                ))}
            </Tags>
            {/* Project details */}
            <Details>
                {/* Project title */}
                <Title>{project.title}</Title>
                {/* Project date */}
                <Date>{project.date}</Date>
                {/* Project description */}
                <Description>{project.description}</Description>
            </Details>
        </Card>
    );
};

export default ProjectCard;
