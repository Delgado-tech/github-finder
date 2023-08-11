import styled from 'styled-components';

export const SidebarContainer = styled.section`
    color: ${({theme}) => theme.colors.fg.main};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 250px;

    position: sticky;
    top: 2rem;

    & figure {
        width: 90%;

        & img {
            width: 100%;
            border: 1px solid ${({theme}) => theme.colors.fg.c2};
            border-radius: 50%;
        }
    }

    & .sidebar_username {
        line-height: 1.5rem;
        width: 100%;
        line-height: 2rem;

        & h3 {
            font-size: 1.5rem;
            line-height: 1.75rem;
            letter-spacing: 0.5px;
            transition: all .2s ease;

            &:hover {
                text-decoration: underline;
                color: ${({theme}) => theme.colors.secondary.main};
            }
            
            & span {
                margin-left: 0.5rem;
                vertical-align: middle;
            }
        }

        & p {
            color: ${({theme}) => theme.colors.fg.c2};
            font-size: 1.25rem;
        }
    }

    & .sidebar_followers {
        display: flex;
        gap: 0.5rem;
        width: 100%;

        & > span {
            color: ${({theme}) => theme.colors.fg.c2};
            font-weight: 700;
        }

        & p {
            color: ${({theme}) => theme.colors.fg.c5};
        }

        & p span {
            color: ${({theme}) => theme.colors.fg.c3};
        }
    
    }
`;