import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import {AuthContext} from "../contexts/AuthContext";
import {Navigate} from "react-router";

const AuthMiddleware = ({component: Component, layout: Layout, isAuthProtected, pageTitle, leadText, ...rest}) => {
  // const {auth} = useContext(AuthContext);
  const auth = localStorage.getItem("access_token");

  if (isAuthProtected && !auth) {
    return <Navigate to="/signin" replace />;
  }
  if (!isAuthProtected && auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{"Lagos Ride Admin - " + pageTitle}</title>
      </Helmet>
      <Layout title={pageTitle}>
        <Component
        //  {...props}
        />
      </Layout>
    </>
  );
};

AuthMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};
export default AuthMiddleware;
