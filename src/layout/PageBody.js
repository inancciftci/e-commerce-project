import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../pages/HomePage";

export default function PageBody() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
