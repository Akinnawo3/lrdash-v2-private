import {lazy} from "react";

const Signup = lazy(() => import("../Pages/auth/Signup"));
const Signin = lazy(() => import("../Pages/auth/Signin"));
const ForgotPassword = lazy(() => import("../Pages/auth/ForgotPassword"));
const Verification = lazy(() => import("../Pages/auth/Verification"));
const RegistrationConfirmation = lazy(() => import("../Pages/auth/RegistrationConfirmation"));
const ResetPassword = lazy(() => import("../Pages/auth/ResetPassword"));

//Overview
const Home = lazy(() => import("../Pages/others/home/home"));
//finance
const Finance = lazy(() => import("../Pages/others/finance.js/finance"));
//perfornmance
const BusinessPerformance = lazy(() => import("../Pages/others/performance/BusinessPerformance"));
const DriverPerformance = lazy(() => import("../Pages/others/performance/DriverPerformance"));

export const authRoutes = [
  {path: "/signin", component: Signin, title: "Signin", leadText: ""},
  //   {path: "/signup", component: Signup, title: "Signup", leadText: "Create Account"},
  //   {path: "/registration-confirmation/", component: RegistrationConfirmation, title: "Signup", leadText: "Registration Confirmation"},
  //   {path: "/verify-email/", component: Verification, title: "verify-email", leadText: "Email Verification"},
  //   {path: "/forgot-password", component: ForgotPassword, title: "forgot-password", leadText: "Password Reset"},
  //   {path: "/reset-password", component: ResetPassword, title: "reset-password", leadText: "Password Reset"},
];

export const userRoutes = [
  {path: "/", component: Home, title: "Home"},
  {path: "/finance", component: Finance, title: "Finance"},
  {path: "/performance/business", component: BusinessPerformance, title: "Performance"},
  {path: "/performance/driver", component: DriverPerformance, title: "Performance"},
];

// TODO: 404, 500
