import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import DashBoard from "./Dashboard";
import Pizza from "./Pages/Pizzas/index"
import Hamburger from "./Pages/Hamburger/index"
import Pasteis from "./Pages/Pasteis/index"
import Sucos from "./Pages/Sucos/index"
import Porcoes from "./Pages/Porcoes/index"


  const router = () => {
    return (
      <BrowserRouter>
      <Route component = { Pizza }  path="/" exact/>
      <Route component = { Hamburger }  path="/hamburger" />
      <Route component = { Pasteis }  path="/pasteis" />
      <Route component = { Sucos }  path="/sucos" />
      <Route component = { Porcoes }  path="/porcoes" />
      </BrowserRouter>
    )
  }
  
  export default router;