import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Holder, Title, GoTo } from "./styles";

export default function MiniProfile() {
 
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
            <GoTo onClick={goToProfile}>sampleUsername</GoTo>
            <GoTo onClick={logoutUser}>Logout</GoTo>
        </Holder>
    );
}
