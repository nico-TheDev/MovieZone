import React, { useContext } from "react";
import { Link } from "react-router-dom";
import bg from "assets/img/background.png";
import logo from "assets/img/logo.png";
import {
    Main,
    Content,
    BG,
    Logo,
    H1,
    Buttons,
    Btn as Button,
    SubBtn as Sub,
} from "./styles";
import { AuthContext } from "contexts/AuthContext";

export default function LoginPage() {
    const { manageSession } = useContext(AuthContext);

    return (
        <Main>
            <Content>
                <Link to="/">
                    <Logo src={logo} alt="MovieZone Logo" />
                </Link>
                <H1>
                    Login with your <span>MovieDB</span> Account
                </H1>
                <Buttons>
                    <Button onClick={manageSession}>Login</Button>
                    <Sub>Browse as Guest</Sub>
                </Buttons>
            </Content>
            <BG src={bg} alt="Background Photo" />
        </Main>
    );
}
