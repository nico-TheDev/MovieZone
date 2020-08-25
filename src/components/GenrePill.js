import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pill = styled.span`
    width: max-content;
    padding: 0.3em 0.6em;
    margin: 7px;
    margin-left: 0;
    background-color: var(--main-color);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
        background-color: var(--main-color-2);
    }
`;

export default function GenrePill({ genre, id ,type}) {
    return (
        <Link to={`/genre/${genre}/${type}/${id}`}>
            <Pill>{genre}</Pill>
        </Link>
    );
}
