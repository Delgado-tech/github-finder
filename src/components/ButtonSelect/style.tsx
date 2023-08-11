import styled from 'styled-components';

export const ButtonSelectContainer = styled.div`
    position: relative;
    user-select: none;
    background-color: ${({theme}) => theme.colors.bg.c3};
    border-radius: ${({theme}) => theme.borderRadius.small};
    cursor: pointer;

    & p {
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
        align-items: center;

        color: ${({theme}) => theme.colors.fg.main};
        padding: 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 1px;
    }

    & ul {
        position: absolute;
        display: block;
        border-radius: ${({theme}) => theme.borderRadius.small};
        left: 0;
        top: calc(0.875rem + (0.5rem * 2)); // tamanho da font + paddings
        width: 100%;
        z-index: 10;

        & li {
            color: ${({theme}) => theme.colors.fg.c3};
            background-color: ${({theme}) => theme.colors.bg.c3};
            font-size: 0.875rem;
            padding: 0.5rem;
        }

        & li:hover {
            background-color: ${({theme}) => theme.colors.fg.c4};
            color: ${({theme}) => theme.colors.bg.c1};
        }

        & a:last-child li {
            border-radius: 0 0 ${({theme}) => theme.borderRadius.small} ${({theme}) => theme.borderRadius.small}; 
        }
    }


    & .buttonSelect_hidden {
        display: none !important;
    }
`;