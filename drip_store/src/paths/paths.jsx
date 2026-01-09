import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Layout from "../layout/Layout";
import Categorias from "../pages/Categorias";

const Paths = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/ProductListingPage" element={<ProductListingPage/>} />
        <Route path="/ProductViewPage" element={<ProductViewPage/>} />
      </Route>
    </Routes>
  );
};

export default Paths;
