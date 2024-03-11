import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./common/layouts";
import { Details, Home, Market, NotFound, Orders } from "./modules";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Market />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:id" element={<Details />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
