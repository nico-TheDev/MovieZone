import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Holder, Title, GoTo } from "./styles";
import { useAuth } from 'contexts/AuthContext';


export default function MiniProfile() {
    const { state:{user} } = useAuth();
 
    const history = useHistory();

    const logoutUser = () => {
        localStorage.clear();
        history.push("/");
        window.location.reload();
    };

    const goToProfile = () => {
        history.push("/profile");
        window.location.reload();
    };

    return (
        <Holder>
            <Title>Profile</Title>
            <GoTo onClick={goToProfile}>{user ? user.username : 'Guest'}</GoTo>
            <GoTo onClick={logoutUser}>Logout</GoTo>
        </Holder>
    );
}
