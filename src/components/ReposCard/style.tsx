import styled from 'styled-components';

export const ReposCardContainer = styled.nav`
    background-color: ${({theme}) => theme.colors.bg.c1};
    border-radius: ${({theme}) => theme.borderRadius.small};
    border: 1px solid ${({theme}) => theme.colors.bg.c3};
    color: ${({theme}) => theme.colors.fg.main};
    padding: 0.875rem;
    word-wrap: break-word;

    position: relative;

    & a {
        display: none;
        position: absolute;
    }

    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        row-gap: 0.5rem;
        margin-bottom: 0.25rem;

        & h3 {
            width: 75%;
            font-size: 1.25rem;
        }

        & p {
            text-align: end;
            color: ${({theme}) => theme.colors.fg.c4};
        }
    }

    & .repos_repository_createdAt {
        color: ${({theme}) => theme.colors.fg.c3};
        font-weight: 400;
        font-size: 0.875rem;
        margin-bottom: 1rem;
    }

    & .repos_repository_description {
        color: ${({theme}) => theme.colors.fg.c3};
        font-size: 0.875rem;
        line-height: 1.25rem;
        height: calc(1.25rem * 3);
        padding-right: 0.75rem;
        overflow-y: auto;
        margin-bottom: 1rem;
    }

    & .repos_repository_language {
        font-weight: 700;
        font-size: 0.75rem;
        letter-spacing: 1px;
        width: fit-content;
        padding: 0.25rem 0.5rem;
        background-color: ${({theme}) => theme.colors.bg.main};
        border-radius: ${({theme}) => theme.borderRadius.medium};
        border: 1px solid ${({theme}) => theme.colors.bg.c3};
    }

    & .repos_repository_language_emptySpace {
        margin-bottom: 1rem;
    }

`;