import {Routes, Route} from "react-router";
import StandardLayout from "../components/layouts/StandardLayout";
import AuthMiddleware from "../middleware/AuthMiddleware";
import {userRoutes} from "../routes/routesList";

const ProtectedPages = () => {
  return (
    <Routes>
      {userRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={<AuthMiddleware isAuthProtected pageTitle={route.title} component={route.component} layout={StandardLayout} />} />
      ))}
    </Routes>
  );
};

export default ProtectedPages;
