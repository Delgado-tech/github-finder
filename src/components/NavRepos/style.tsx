import styled from 'styled-components';

export const NavReposContainer = styled.nav`
    
    margin: 2rem 0;

    
    & ul {
        display: flex;
        gap: 0.5rem;
        justify-content: center;

        & li {
            background-color: ${({theme}) => theme.colors.bg.c3};
            color: ${({theme}) => theme.colors.fg.c4};
            border-radius: ${({theme}) => theme.borderRadius.small};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: 700;
            width: 2rem;
            height: 2rem;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }

        & li:hover {
            filter: brightness(120%);
        }

        & li.navrepos_currentPage {
            background-color: ${({theme}) => theme.colors.secondary.dark} !important;
            color: ${({theme}) => theme.colors.fg.main} !important;            
        }

        & li.navrepos_ellipsis {
            background-color: ${({theme}) => theme.colors.bg.c5};
            color: ${({theme}) => theme.colors.fg.c3} !important; 
            cursor: default !important;
            font-weight: 400;
        }

        & li.navrepos_ellipsis:hover {
            filter: none !important;
        }
    }
`;