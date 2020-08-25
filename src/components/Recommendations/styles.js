import styled from "styled-components";
import Container from "../shared/Container";

const RecommendationsMain = styled.div`
    padding: 2rem 0;
`;

const Title = styled.h2`
    margin-bottom:1rem;
    text-align:center;
`;

const RecommendationsContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 1rem;
`;

const Placeholder = styled.h2`
    grid-column:1/-1;
    text-align:center;
`;

export { RecommendationsMain, RecommendationsContainer,Title, Placeholder };
