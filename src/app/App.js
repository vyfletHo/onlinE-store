import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./layouts/products";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Product from "./components/product";
import Basket from "./layouts/basket";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/products/:productId?" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Route path="/basket" exact component={Basket} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default App;
