import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log(props);

        if (!auth.getCurUser())
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          ); // props.location.pathname --> redirect之前的url
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
