import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ScrollCategoryProvider } from "../src/providers/scrollCategory";

import { AuthProvider } from "../src/providers/auth";

import { AboutCar } from "./pages/AboutCar";
import { Checkout } from "./pages/Checkout";
import { Pagamento } from "./pages/Pagamento";
import { Planos } from "./pages/Planos";
import { dados } from "./pages/Dados";
import { Home } from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <ScrollCategoryProvider>
            <Route path="/" exact component={Home} />
          </ScrollCategoryProvider>
          <Route path="/aboutcar" component={AboutCar} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/pagamento" component={Pagamento} />
          <Route path="/planos" component={Planos} />
          <Route path="/dados" component={Dados} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
