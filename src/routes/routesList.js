import { lazy } from "react";
import DailyRevenue from "../Pages/others/finance/revenue/DailyRevenue";

const Signup = lazy(() => import("../Pages/auth/Signup"));
const Signin = lazy(() => import("../Pages/auth/Signin"));
const ForgotPassword = lazy(() => import("../Pages/auth/ForgotPassword"));
const Verification = lazy(() => import("../Pages/auth/Verification"));
const RegistrationConfirmation = lazy(() => import("../Pages/auth/RegistrationConfirmation"));
const ResetPassword = lazy(() => import("../Pages/auth/ResetPassword"));

//Overview
const Home = lazy(() => import("../Pages/others/home/Home"));

//perfornmance
const BusinessPerformance = lazy(() => import("../Pages/others/performance/BusinessPerformance"));
const DriverPerformance = lazy(() => import("../Pages/others/performance/DriverPerformance"));
const WatchList = lazy(() => import("../Pages/others/performance/WatchList"));

//finance
const Revenue = lazy(() => import("../Pages/others/finance/revenue/Revenue"));
const ServicePayment = lazy(() => import("../Pages/others/finance/service-payment/ServicePayment"));
const Wallet = lazy(() => import("../Pages/others/finance/wallet/Wallet"));
const DebtService = lazy(() => import("../Pages/others/finance/debtService/DebtService"));
const Disbursement = lazy(() => import("../Pages/others/finance/disbursemant/Disbursement"));

export const authRoutes = [
  { path: "/signin", component: Signin, title: "Signin", leadText: "" },
  //   {path: "/signup", component: Signup, title: "Signup", leadText: "Create Account"},
  //   {path: "/registration-confirmation/", component: RegistrationConfirmation, title: "Signup", leadText: "Registration Confirmation"},
  //   {path: "/verify-email/", component: Verification, title: "verify-email", leadText: "Email Verification"},
  //   {path: "/forgot-password", component: ForgotPassword, title: "forgot-password", leadText: "Password Reset"},
  //   {path: "/reset-password", component: ResetPassword, title: "reset-password", leadText: "Password Reset"},
];

export const userRoutes = [
  { path: "/", component: Home, title: "Home" },

  //performance
  {
    path: "/performance/business",
    component: BusinessPerformance,
    title: "Performance",
  },
  {
    path: "/performance/driver",
    component: DriverPerformance,
    title: "Performance",
  },
  { path: "/performance/watchlist", component: WatchList, title: "Performance" },

  //finance
  { path: "/finance/revenue", component: Revenue, title: "Finance" },
  { path: "/finance/revenue/:date", component: DailyRevenue, title: "Finance" },

  {
    path: "/finance/service-payment",
    component: ServicePayment,
    title: "Finance",
  },
  {
    path: "/finance/wallet",
    component: Wallet,
    title: "Finance",
  },
  {
    path: "/finance/debt-service",
    component: DebtService,
    title: "Finance",
  },
  {
    path: "/finance/disbursement",
    component: Disbursement,
    title: "Finance",
  },
];

// TODO: 404, 500
