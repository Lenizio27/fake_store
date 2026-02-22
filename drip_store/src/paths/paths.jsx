import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Categorias from "../pages/Categorias";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";

const Paths = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/CategoriasProdutos" element={<Categorias/>} />
        <Route path="/ProductListingPage" element={<ProductListingPage/>} />
        <Route path="/ProductViewPage" element={<ProductViewPage/>} />
      </Route>
        <Route path="/LoginPage" element={<LoginPage />} />
    </Routes>
  );
};

export default Paths;
