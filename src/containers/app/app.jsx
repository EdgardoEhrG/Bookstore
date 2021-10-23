import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../../pages/home-page";
import CartPage from "../../pages/cart-page";
import ErrorPage from "../../pages/error-page";

import AppHeader from "../../components/app-header/app-header";

const App = () => {
  return (
    <main role="main" className="container">
      <AppHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

export default App;
