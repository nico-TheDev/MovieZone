import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "reducers/AuthReducer";
import API from "api/moviedb.instance";
import actionTypes from "ActionTypes";
import useUser from "hooks/useUserAccount";
import useUserMedia from "hooks/useUserMedia";

const getToken = () => {
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"));
    }
    return null;
};
const getSession = () => {
    if (localStorage.getItem("session")) {
        return JSON.parse(localStorage.getItem("session"));
    }
    return null;
};

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        isLoggedIn: false,
        token: getToken(),
        session: getSession(),
        user: null,
        userMedia: null,
    });
    const baseURL = window.location.origin;
    const { data: userData } = useUser(state.session);
    const { data: userMedia } = useUserMedia(state.session, state.user);

    // CHECK IF THERE IS TOKEN
    useEffect(() => {
        if (state.token && !state.session) {
            API.post("authentication/session/new", {
                request_token: state.token.request_token,
            }).then((res) => {
                if (res.data.success) {
                    dispatch({
                        type: actionTypes.SAVE_SESSION,
                        session: res.data,
                    });
                } else {
                    console.log("error token");
                }
            });
        }
    }, [state.token, state.session]);

    // GET THE USER

    useEffect(() => {
        if (state.session) {
            dispatch({ type: actionTypes.GET_USER, user: userData });
        }
    }, [userData]);

    useEffect(() => {
        if (state.user) {
            dispatch({ type: actionTypes.GET_USER_MEDIA, media: userMedia });
        }
    }, [state.user, state.session, userMedia]);

    const manageSession = async () => {
        const tokenData = await API.get("authentication/token/new");
        if (tokenData.data.success) {
            dispatch({
                type: actionTypes.SAVE_TOKEN,
                token: tokenData.data,
            });
            window.location
                .assign(`https://www.themoviedb.org/authenticate/${tokenData.data.request_token}?redirect_to=${baseURL}/profile
            `);
        } else {
            console.log("No Token ");
        }
    };

    return (
        <AuthContext.Provider
            value={{ state, dispatch, manageSession }}
            {...props}
        />
    );
};

export const useAuth = () => React.useContext(AuthContext);
