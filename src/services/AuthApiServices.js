import { activateAccountURL, initiatePasswordResetURL, passwordChangeURL, passwordResetURL, signinURL, signoutURL, signupURL, triggerVerificationResendURL, facebookURL, googleURL } from "../constants/urls";
import { postApi } from "../helpers/RequestHelper";

// for signup
export const signupUser = async ({ payload }) => {
    const res = await (postApi(signupURL, payload));
    return res;
}

// for signin
export const signinUser = async ({ payload }) => {
    const res = await (postApi(signinURL, payload));
    return res;
}

// for account activation with token gotten from email
export const activateAccount = async ({ payload }) => {
    const res = await (postApi(activateAccountURL, payload));
    return res;
}

// for triggering the resending of email incase not found
export const triggerVerificationResend = async ({ payload }) => {
    const res = await (postApi(triggerVerificationResendURL, payload));
    return res;
}

// for initiating the sending if email reset instructions
export const initiatePasswordReset = async ({ payload }) => {
    const res = await (postApi(initiatePasswordResetURL, payload));
    return res;
}

// for resetting the password with the information gotten via email
export const passwordReset = async ({ payload }) => {
    const res = await (postApi(passwordResetURL, payload));
    return res;
}

// to log user out
export const logoutUser = async () => {
    const res = await (postApi(signoutURL));
    return res;
}

// to change password from inside the dashboard
export const passwordChange = async ({ payload }) => {
    const res = await (postApi(passwordChangeURL, payload));
    return res;
}

// to change password from inside the dashboard
export const loginFacebook = async ({ payload }) => {
    const res = await (postApi(facebookURL, payload));
    return res;
}

// to change password from inside the dashboard
export const loginGoogle = async ({ payload }) => {
    const res = await (postApi(googleURL, payload));
    return res;
}
