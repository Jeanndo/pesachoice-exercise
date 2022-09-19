import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Dashboard from "./../components/Layouts/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
