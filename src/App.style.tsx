import styled from 'styled-components';

export const AppContainer = styled.section`
    & main {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 1rem;
        padding: 3rem 0;

        & .app_sidebar {
            grid-column: span 4;
        }
    }

    & .app_userNotFound {
        background-color: ${({theme}) => theme.colors.bg.c1};
        text-align: center;
        padding: 3rem 0;
        border-radius: ${({theme}) => theme.borderRadius.small};

        & h2 {
            color: ${({theme}) => theme.colors.fg.main};
            font-size: 3rem;
        }

        & p {
            color: ${({theme}) => theme.colors.fg.main};
        }
    }
`;