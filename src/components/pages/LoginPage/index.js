import React, { useContext, useState } from "react";
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
    Form,
    Field,
    Label,
    Input,
    ErrorMsg,
    Btn as Button,
    SubBtn as Sub,
} from "./styles";
import { useAuth } from "contexts/AuthContext";

export default function LoginPage() {
    const { manageSession } = useAuth();
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

/*
    <Field>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            placeholder="Username"
                            id="username"
                            value={username}
                            onChange={handleUsername}
                        />
                        <ErrorMsg>Lorem, ipsum dolor.</ErrorMsg>
                    </Field>
                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <ErrorMsg>Lorem, ipsum dolor.</ErrorMsg>
                    </Field>
*/
