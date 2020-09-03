import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Holder, Title, GoTo } from "./styles";
import { UserContext } from "contexts/UserContext";

export default function MiniProfile() {
    const {
        data: { user },
    } = useContext(UserContext);
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
            <GoTo onClick={goToProfile}>{user?.username}</GoTo>
            <GoTo onClick={logoutUser}>Logout</GoTo>
        </Holder>
    );
}
