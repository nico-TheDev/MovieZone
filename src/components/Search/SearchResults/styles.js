import styled from "styled-components";
import respondTo from "../../../util/respondTo";

const Results = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${({ isEmpty }) => (isEmpty ? "max-content" : "300px")};
    overflow-y: ${({ isEmpty }) => (isEmpty ? "unset" : "scroll")};
    overflow-x: hidden;
    display: grid;
    padding: 5px;
    background: var(--main-dark);
    display: ${({ isShowing }) => (isShowing ? "block" : "none")};

    ${respondTo.md`
        display:none;
    `}
`;

const Title = styled.h3`
    text-align: center;
    padding: 5px;
    border-bottom: 1px solid white;
`;

const SubTitle = styled(Title)`
    border-bottom: none;
`;

export { Results, Title, SubTitle };
