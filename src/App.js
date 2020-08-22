import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./mui-config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"


import ProductList from "./components/ProductList";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import Store from "./components/Store";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/store" component={Store} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
