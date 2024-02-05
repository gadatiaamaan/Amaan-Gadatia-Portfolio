import styled from 'styled-components';

// Container for the Projects section with a gradient background
export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

// Wrapper for the Projects section, controlling layout and responsiveness
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 1284px) {
        flex-direction: column;
    }
`;

// Title styling for the Projects section
export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 1284px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

// Description styling for the Projects section
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 1284px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

// ToggleButtonGroup styling for filtering projects
export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 1284px) {
        font-size: 12px;
    }
`;

// Individual ToggleButton styling for project filtering
export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active &&
        `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 1284px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

// Divider styling for separating ToggleButtons
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

// CardContainer styling for holding project cards
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;
