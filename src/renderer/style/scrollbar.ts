export const thinScrollBar = `
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-track {
        width: 4px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        width: 4px;
        background-color: rgba(200, 200, 200, 0.3); /* Light thumb for dark bg */
        border-radius: 4px;
    }
`;

export const fatScrollBar = `
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #121212; /* Dark track background */
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(200, 200, 200, 0.4); /* Light thumb */
    }
    ::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: rgba(40, 40, 40, 0.5); /* Dark track with subtle contrast */
    }
`;

export const tabMaxHeight = ` 
    max-height: calc(100vh - 45px);
`;
