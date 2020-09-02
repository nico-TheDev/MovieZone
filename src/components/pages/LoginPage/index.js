import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import bg from "assets/img/background.png";
import logo from "assets/img/logo.png";
import {
    Main,
    Content,
    BG,
    Logo,
    H1,
    Form,
    Field,
    Label,
    Input,
    Btn as Button,
    SubBtn as Sub,
    ErrorMsg,
} from "./styles";
import { AuthContext } from "contexts/AuthContext";

export default function LoginPage() {
    const { manageSession } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Main>
            <Content>
                <Link to="/">
                    <Logo src={logo} alt="MovieZone Logo" />
                </Link>
                <H1>
                    Login with your <span>MovieDB</span> Account
                </H1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
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
                    <Button onClick={manageSession}>Login</Button>
                    <Sub>Browse as Guest</Sub>
                </Form>
            </Content>
            <BG src={bg} alt="Background Photo" />
        </Main>
    );
}
