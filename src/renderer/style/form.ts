import styled from 'styled-components';

export const LabelButton = styled.span`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    min-height: 32px;
    background-color: #121212;  /* Dark background */
    color: #e0e0e0;  /* Light text */

    button {
        margin: 0 4px;
        background-color: #1e1e1e; /* Dark button background */
        color: #e0e0e0; /* Light text on button */
        border: 1px solid #333;

        &:hover {
            background-color: #2a2a2a; /* Slightly lighter on hover */
        }
    }
`;
