
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("access_token", action.payload.access_token);
            localStorage.setItem("refresh_token", action.payload.access_token);
            return action.payload.user
        case "LOGOUT":
            localStorage.clear()
            return null;

        // case LOGIN_FAILED:
        //   //console.log("yes");
        //   return {
        //     ...state,
        //     isAuth: false,
        //     isError: true,
        //     data: action.payload,
        //   };
        default:
            return state;
    }
};
