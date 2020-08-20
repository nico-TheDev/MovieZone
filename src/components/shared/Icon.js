import React from "react";
import styled from "styled-components";

import iconDir from "../../assets/icons/icons.svg";

const IconStyle = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
`;

export default function Icon({ name }) {
    return (
        <IconStyle>
            <use href={`${iconDir}#icon-${name}`}></use>
        </IconStyle>
    );
}
