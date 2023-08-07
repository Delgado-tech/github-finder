import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    background-color: ${({theme}) => theme.colors.bg.c5};
    border-radius: ${({theme}) => theme.borderRadius.small};
    border: 1px solid ${({theme}) => theme.colors.bg.c3};
    color: ${({theme}) => theme.colors.fg.main};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    height: 2.5rem;

    & input {
        width: 100%;
        height: 1rem;
        font-size: 1rem;
        color: ${({theme}) => theme.colors.fg.main};

        &::placeholder {
            color: ${({theme}) => theme.colors.fg.c3};
        }
    }

`;