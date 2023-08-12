import styled from 'styled-components';

export const ReposContainer = styled.div`
    grid-column: span 8;
    width: 100%;

    & .repos_header {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;

        margin-bottom: 1rem;

        & .repos_header_back {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            color: ${({theme}) => theme.colors.fg.c2};
            font-size: 1rem;
            transition: all 0.2s ease-in-out;

            cursor: pointer;

            &:hover {
                color: ${({theme}) => theme.colors.secondary.main} !important;
                text-decoration: underline;
            }
        }

        & .repos_header_orderBy {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            & > p {
                color: ${({theme}) => theme.colors.fg.c3};
                font-size: 0.75rem;
                font-weight: 700;
                letter-spacing: 1px;
            }

            & > div { // botão orderby
                min-width: 9rem; 
            }
        }
    }

    & .repos_repositories {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        height: 100%;
    }

    @media screen and (max-width: 1176px) {
        grid-column: span 12;
    }

    @media screen and (max-width: 450px) {
        & .repos_header {
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            & .repos_header_orderBy {
                width: 100%;         

                & > p {
                    display: none;
                }

                & > div { // botão orderby
                    min-width: 100%;
                }
            }
        }
    }
`;