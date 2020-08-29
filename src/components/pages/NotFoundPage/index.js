import React from "react";
import { useHistory } from "react-router-dom";

import { Image, Main, Title } from "./styles";
import img from "../../../assets/img/404.svg";
import Button from "../../shared/Button";

export default function NotFoundPage() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
    return (
        <Main>
            <Image src={img} alt="404 page" />
            <Title>Page Not Found</Title>
            <Button onClick={handleClick}>Go To Home</Button>
        </Main>
    );
}
