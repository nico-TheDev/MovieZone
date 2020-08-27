import React from "react";
import { Image, Main, Title } from "./styles";
import img from "../../../assets/img/404.svg";
import Button from "../../shared/Button";

export default function NotFoundPage({ location, history }) {
    const handleClick = () => {
        history.push("/");
    };
    return (
        <Main>
            <Image src={img} alt="404 page" />
            <Title>
                {location.pathname.includes("error")
                    ? "Something Went Wrong"
                    : "Page Not Found"}
            </Title>
            <Button onClick={handleClick}>Go To Home</Button>
        </Main>
    );
}
