import { Route, Routes } from "react-router-dom";
import Category from "../components/Category";
import ImageDetails from "../components/ImageDetails";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/images/:id" element={<ImageDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
