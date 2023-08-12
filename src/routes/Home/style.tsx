import styled from 'styled-components';

export const HomeContainer = styled.div`
    grid-column: span 8;
    width: 100%;

    color: ${({theme}) => theme.colors.fg.main};

    & .home_id {
        color: ${({theme}) => theme.colors.fg.c3};
        text-align: right;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    & .home_bio {
        background-color: ${({theme}) => theme.colors.bg.c1};
        border: 1px solid ${({theme}) => theme.colors.bg.c2};
        border-radius: ${({theme}) => theme.borderRadius.small};

        padding: 1rem;
        margin-bottom: 0.5rem;

        & div {
            padding-right: 1rem;
            overflow-y: auto;
            height: 10.5rem;
        
            & h3 {
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: ${({theme}) => theme.colors.fg.c5};
            }
        
        }
        
    }

    & .home_othersInfos {
        margin-bottom: 8rem;
        line-height: 1.5rem;
        color: ${({theme}) => theme.colors.fg.c3};
    }

    @media screen and (max-width: 1176px) {
        grid-column: span 12;
    }
`;