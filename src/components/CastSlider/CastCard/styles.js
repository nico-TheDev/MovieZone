import styled from "styled-components";

const Cast = styled.figure`
    height: 14rem;
    width:10rem;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    &:hover div{
        opacity:1;
    }
`;

const CastPhoto = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 1rem;
    object-fit: cover;
`;

const Content = styled.div`
    opacity: 0;
    background: var(--main-dark-2);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
`;

export { Cast, CastPhoto, Content };
