import styled from "styled-components";
import Container from "../../shared/Container";

const Wrapper = styled.div`
    padding-top: 20vh;
`;

const CollectionContainer = styled(Container)`
    padding: 2rem 0 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 2rem;
    justify-items: center;
`;


const Title = styled.h2`
    text-align:center;
    margin-bottom:1rem;
`;

export { Wrapper, CollectionContainer, Title }