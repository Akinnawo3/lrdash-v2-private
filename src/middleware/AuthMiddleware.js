import React, {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";
import {AuthContext} from "../contexts/AuthContext";

const AuthMiddleware = ({component: Component, layout: Layout, isAuthProtected, pageTitle, leadText, ...rest}) => {
  const {auth} = useContext(AuthContext);

  // if (isAuthProtected && !auth) {
  //   return (
  //     <Redirect
  //       to={{ pathname: "/signin", state: { from: props.location } }}
  //     />
  //   )
  // }
  // if (!isAuthProtected && auth) {
  //   return (
  //     <Redirect
  //       to={{ pathname: "/", state: { from: props.location } }}
  //     />
  //   )
  // }
  return (
    <>
      <Helmet>
        <title>{"Lagos Ride Admin - " + pageTitle}</title>
      </Helmet>
      <Layout title={leadText}>
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