import styled from "styled-components";
import { RingLoader } from "../Loader/styles";
import Icon from "../shared/Icon";

const SearchForm = styled.form`
    margin-right:1rem;
    position:relative;
`;

const FieldContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    border: 1px white solid;
    background: rgba(var(--main-dark), 0.5);
    border-radius: 2rem;
    padding: 0.5rem 1rem 0.5rem 3rem;
    color: white;
    outline: none;
    max-width:250px;

    &:focus,
    &:active {
        border-color: var(--main-color);
    }

    &:focus + .search__icon,
    &:active + .search__icon {
        fill: var(--main-color);
    }
`;

const SearchIcon = styled(Icon)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
`;
const SearchLoader = styled(RingLoader)`
    position: absolute !important;
    transform: scale(0.25);
    right: -1rem;
    top: -1rem;
`;


export {
    SearchForm,
    FieldContainer,
    SearchInput,
    SearchIcon,
    SearchLoader,
};
