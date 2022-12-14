export const AuthActionSuccess = (payload) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: payload,
    };
};

export const AuthActionFailed = (payload) => {
    return {
        type: "LOGIN_FAILED",
        payload: payload,
    };
};

export const LogoutAction = () => {
    return {
        type: "LOGOUT",
    };
};
