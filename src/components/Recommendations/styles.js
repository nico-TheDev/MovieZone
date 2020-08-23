import styled from "styled-components";
import Container from "../shared/Container";

const RecommendationsMain = styled.div`
    padding: 4rem 0;
`;

const Title = styled.h2`
    margin-bottom:1rem;
    text-align:center;
`;

const RecommendationsContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-auto-rows:14rem;
    gap: 1rem;
`;

export { RecommendationsMain, RecommendationsContainer,Title };
