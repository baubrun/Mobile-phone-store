import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./mui-config";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
// import ProductList from "./components/ProductList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <NavBar />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
