import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    color: ${({theme}) => theme.colors.fg.main};
    padding: 3rem 0;

    & h1 {
        letter-spacing: 1.5px;
        font-size: 2rem;
    }

    & nav {
        width: 60%;
    }
`;