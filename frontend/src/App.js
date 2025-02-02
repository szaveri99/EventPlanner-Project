import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/index";

const App = () => {
  return (
    <Router>
        <AppRoutes />
    </Router>
  );
};

export default App;
