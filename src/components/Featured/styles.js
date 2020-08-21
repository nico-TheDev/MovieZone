import styled from "styled-components";
import Container from "../shared/Container";
import Button from "../shared/Button";

const FeaturedStyle = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
`;

const BGWrapper = styled.div``;

const BG = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -4;
    object-fit: cover;
    filter:brightness(40%);
`;

const Genres = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin:1rem 0;
`;

const FeaturedContainer = styled(Container)`
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
`;

const Content = styled.div`
    flex: 1;
`;

const Description = styled.p`
    width: 80%;
    margin-bottom: 1rem;
`;

const FeaturedButton = styled(Button)`
    display: inline-flex;
    align-items: center;
    text-align:center;
`;

const Cover = styled.div`
    margin-left: 3rem;
`;

export {
    FeaturedStyle,
    BGWrapper,
    BG,
    FeaturedContainer,
    Content,
    Description,
    FeaturedButton,
    Cover,
    Genres
};
