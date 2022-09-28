import { lazy } from 'react';

const Signup = lazy(() => import("../Pages/auth/Signup"));
const Signin = lazy(() => import("../Pages/auth/Signin"));
const Home = lazy(() => import("../Pages/others/home/Home"));
const ForgotPassword = lazy(() => import("../Pages/auth/ForgotPassword"));
const Verification = lazy(() => import("../Pages/auth/Verification"));
// const Plans = lazy(() => import("../Pages/others/business/"));
const RegistrationConfirmation = lazy(() => import("../Pages/auth/RegistrationConfirmation"));
const ResetPassword = lazy(() => import("../Pages/auth/ResetPassword"));

export const authRoutes = [
    { path: "/signup", component: Signup, title: "Signup", leadText: "Create Account" },
    { path: "/registration-confirmation/", component: RegistrationConfirmation, title: "Signup", leadText: "Registration Confirmation" },
    { path: "/signin", component: Signin, title: "Signin", leadText: "" },
    { path: "/verify-email/", component: Verification, title: "verify-email", leadText: "Email Verification" },
    { path: "/forgot-password", component: ForgotPassword, title: "forgot-password", leadText: "Password Reset" },
    { path: "/reset-password", component: ResetPassword, title: "reset-password", leadText: "Password Reset" },
]

export const userRoutes = [
    { path: "/", component: Home, title: "Home" },
]

// TODO: 404, 500
