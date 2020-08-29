import styled from "styled-components";
import Container from "../../shared/Container";

export const Wrapper = styled.div`
    padding-top: 20vh;
`;

export const CollectionContainer = styled(Container)`
    padding: 2rem 0 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    gap: 2rem;
    justify-items: start;

    & a{
        display:block;
        width:100%;
    }
`;


export const Title = styled.h2`
    text-align:center;
    margin-bottom:1rem;
`;

