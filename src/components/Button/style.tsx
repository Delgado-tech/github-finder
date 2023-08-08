import styled from 'styled-components';

export const ButtonReposContainer = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    width: 100%;
    padding: 0.5rem 1rem;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

    color: ${({theme}) => theme.colors.fg.main};
    background-color: ${({theme}) => theme.colors.primary.main};
    border-radius: ${({theme}) => theme.borderRadius.small};
    border: 1px solid ${({theme}) => theme.colors.primary.dark};

    transition: all .2s ease-in-out;

    & div {
        background-color: ${({theme}) => theme.colors.fg.main};
        width: fit-content;
        min-width: 2rem;
        padding: 2px 10px;
        border-radius: 25px;

        & p {
            color: ${({theme}) => theme.colors.primary.main};
        }

    }

    &:hover {
        color: ${({theme}) => theme.colors.bg.main} !important;
        background-color: ${({theme}) => theme.colors.primary.light};
        border: 1px solid ${({theme}) => theme.colors.primary.main};
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

        transform: scale(101%);
    }

`;