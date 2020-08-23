import styled from "styled-components";

const DropdownHead = styled.ul`
    display: inline-block;
    position: relative;
    text-align:center;
    cursor:pointer;
    border-radius:1rem;
    &:hover span{
        background: var(--main-dark);
    }

    &:hover div {
        top: 100%;
        opacity: 1;
        pointer-events: all;
    }
`;

const DropdownItem = styled.li`
    padding: 0.7rem 1rem;
    width:auto;
    font-size:0.9rem;
    & a:hover{
        color:var(--main-color);
    }

`;

const DropdownButton = styled.span`
    display: block;
    padding: 0.5rem 1rem;
    text-transform:uppercase;
    letter-spacing:4px;
`;

const DropdownBody = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--main-dark);
`;

export { DropdownHead, DropdownItem, DropdownButton, DropdownBody };
