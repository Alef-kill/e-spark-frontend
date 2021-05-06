import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ScrollCategoryProvider } from "../src/providers/scrollCategory";

import { AuthProvider } from "../src/providers/auth";
import { AboutCarProvider } from "../src/providers/cards";

import { AboutCar } from "./pages/AboutCar";
import { Checkout } from "./pages/Checkout";
import { Pagamento } from "./pages/Pagamento";
import { Planos } from "./pages/Planos";
import { Usuario } from "./pages/Usuario";
import { Home } from "./pages/Home";
import { Historico } from "./pages/HistoryUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <AboutCarProvider>
            <ScrollCategoryProvider>
              <Route path="/" exact component={Home} />
            </ScrollCategoryProvider>
            <Route path="/aboutcar" component={AboutCar} />
          </AboutCarProvider>
          <Route path="/planos" component={Planos} />
          <Route path="/usuario" component={Usuario} />
          <Route path="/historyUser" component={Historico} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/pagamento" component={Pagamento} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
