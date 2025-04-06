import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Signup from './page/signup/Signup';
import Login from './page/login/Login';
import Admin from './admin/Admin';
import Home from './page/home/Home';
import About from './page/About/About';
import Contact from './page/contact/Contact';
import Dashboard from './admin/dashboard/Dashboard';
import AddGstBlog from './admin/GstBlogs/AddGstBlog/AddGstBlog';
import AllGstBlog from './admin/GstBlogs/AllGstBlog/AllGstBlog';
import AddIncomeTaxBlog from './admin/IncomeTaxBlog/AddIncomeTaxBlog/AddIncomeTaxBlog';
import AllIncomeTaxBlog from './admin/IncomeTaxBlog/AllIncomeTaxBlog/AllIncomeTaxBlog';
import Gst from './page/gst/Gst';
import IncomeTax from './page/IncomeTax/IncomeTax';
import { StoreProvider } from './redux/configureStore';
import ProtectedRoute from './component/protected/ProtectedRoute';
import AddService from './admin/adminService/AddService/AddService';
import { useBlogsRedux } from './redux/reduxHooks';
import Contact2 from './page/contact/Contact2';
import Service from './page/services/Service';
import Temp from './page/Test/Temp';

const Layout = () => {
  const location = useLocation();

  const showNavbarAndFooter = location.pathname !== '/';

  // Hide Navbar & Footer only on Admin Panel pages
  const isAdminPanel = location.pathname.startsWith('/admin-pannel');


  return (
    <>
      <StoreProvider>
        {!isAdminPanel && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gst" element={<Gst />} />
          <Route path="/incomeTax" element={<IncomeTax />} />
          <Route path="/contact" element={<Contact2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/test" element={<Temp />} />


          <Route path="/admin-pannel" element={<ProtectedRoute>
            <Admin />
          </ProtectedRoute>} >

            <Route path="dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            <Route path="addGstBlog" element={
              <ProtectedRoute>
                <AddGstBlog />
              </ProtectedRoute>
            } />

            <Route path="allGstBlog" element={
              <ProtectedRoute>
                <AllGstBlog />
              </ProtectedRoute>
            } />

            <Route path="addIncomeTaxBlog" element={
              <ProtectedRoute>
                <AddIncomeTaxBlog />
              </ProtectedRoute>
            } />
            <Route path="allIncomeTaxBlog" element={
              <ProtectedRoute>
                <AllIncomeTaxBlog />
              </ProtectedRoute>
            } />
            <Route path="addService" element={
              <ProtectedRoute>
                <AddService />
              </ProtectedRoute>
            } />


            {/* <Route path="sidebar" element={
            <ProtectedRouteForAdmin>
              <Sidebar />
            </ProtectedRouteForAdmin>
            } /> */}


          </Route>

          {/* <Route path="/sidebar" element={<SideBar />} /> */}

        </Routes>
      </StoreProvider>

      {!isAdminPanel && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;



// export const ProtectedRoute = ({ children }) => {
//   const user = localStorage.getItem('user')
//   if (user) {
//     return children
//   } else {
//     return <Navigate to={'/login'} />
//   }
// }


// const ProtectedRouteForAdmin = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem('user'))
//   console.log("object", user);

//   if (user && user.email === "janvipatidar33@gmail.com") {
//     return children
//   }
//   else {
//     return <Navigate to={'/'} />
//   }

// }
// test@gmail.com
// 123456