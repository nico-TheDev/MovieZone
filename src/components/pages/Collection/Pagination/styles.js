import styled from "styled-components";
import Container from "../../../shared/Container";
import Button from "../../../shared/Button";

const PaginationMain = styled.div`
    display: ${({ pageCount }) => (pageCount ? "block" : "none")};
`;

const PaginationContainer = styled(Container)`
    padding: 1rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PageButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Prev = styled(PageButton)`
    visibility: ${({ pageCount }) => (pageCount === 1 ? "hidden" : "visible")};
`;

const Next = styled(PageButton)`
    visibility: ${({ pageLimit, pageCount }) =>
        pageCount < pageLimit ? "visible" : "hidden"};
`;

export { PaginationContainer, Prev, Next, PaginationMain };
