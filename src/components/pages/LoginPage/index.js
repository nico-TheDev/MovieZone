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

export default function LoginPage() {
    const [username ,setUsername] = useState('')
    const [password ,setPassword] = useState('')

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) =>  {
         e.preventDefault();

    }

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
                    <Button>Login</Button>
                    <Sub>Browse as Guest</Sub>
                </Form>
            </Content>
            <BG src={bg} alt="Background Photo" />
        </Main>
    );
}
