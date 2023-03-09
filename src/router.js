import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import DashBoard from "./Dashboard";
import Pizza from "./Pages/Pizzas/index"
import Hamburger from "./Pages/Hamburger/index"
import Sorvetes from "./Pages/Sorvetes/index"
import Sucos from "./Pages/Sucos/index"

  const router = () => {
    return (
      <BrowserRouter>
      <Route component = { Pizza }  path="/" exact/>
      <Route component = { Hamburger }  path="/hamburger" />
      <Route component = { Sorvetes }  path="/sorvetes" />
      <Route component = { Sucos }  path="/sucos" />
      </BrowserRouter>
    )
  }
  
  export default router;