import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import AuthMiddleware from "../middleware/AuthMiddleware";

// import NonLayout from "../components/layouts/NonLayout"
import {authRoutes} from "./routesList";
import {Suspense} from "react";
import LoaderPage from "../components/LoaderPage";
import InnerPages from "../Pages/ProtectedPages";
import AuthLayout from "../components/layouts/AuthLayout";
import ProtectedPages from "../Pages/ProtectedPages";
// import AllModals from "../components/modals/AllModals";

const RoutesCoponent = () => {
  return (
    <Router>
      <Suspense fallback={<LoaderPage size={100} type={"ThreeDots"} />}>
        {/* <AllModals /> */}
        <Routes>
          {authRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={<AuthMiddleware key={i} pageTitle={route.title} component={route.component} layout={AuthLayout} leadText={route.leadText} />} />
          ))}
        </Routes>
        <ProtectedPages />
      </Suspense>
    </Router>
  );
};

export default RoutesCoponent;
