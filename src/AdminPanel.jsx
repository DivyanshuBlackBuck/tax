import { Routes, Route } from "react-router-dom";
import AddGstBlog from "./admin/GstBlogs/AddGstBlog/AddGstBlog";
import AllGstBlog from "./admin/GstBlogs/AllGstBlog/AllGstBlog";
import AllService from "./admin/adminService/AllService/AllService";
import AllIncomeTaxBlog from "./admin/IncomeTaxBlog/AllIncomeTaxBlog/AllIncomeTaxBlog";
import AddService from "./admin/adminService/AddService/AddService";
import AddIncomeTaxBlog from "./admin/IncomeTaxBlog/AddIncomeTaxBlog/AddIncomeTaxBlog";
const AdminPanel = () => {
  return (
    <Routes>
      <Route path="AddGstBlog" element={<AddGstBlog />} />
      <Route path="AddIncomeTaxBlog" element={<AddIncomeTaxBlog />} />
      <Route path="AddServices" element={<AddService />} />
      <Route path="AllGstBlog" element={<AllGstBlog />} />
      <Route path="AllIncomeTaxBlog" element={<AllIncomeTaxBlog />} />
      <Route path="AllServices" element={<AllService />} />
    </Routes>
  );
};
export default AdminPanel;
