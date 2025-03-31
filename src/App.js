import React from 'react';
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

const Layout = () => {
  const location = useLocation();

  const showNavbarAndFooter = location.pathname !== '/';

  // Hide Navbar & Footer only on Admin Panel pages
  const isAdminPanel = location.pathname.startsWith('/admin-pannel');
  return (
    <>
      {!isAdminPanel && <Navbar />}
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gst" element={<Gst />} />
          <Route path="/incomeTax" element={<IncomeTax />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />


          <Route path="/admin-pannel" element={<ProtectedRouteForAdmin>
            <Admin />
          </ProtectedRouteForAdmin>} >

            <Route path="dashboard" element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            } />

            <Route path="addGstBlog" element={
              <ProtectedRouteForAdmin>
                <AddGstBlog />
              </ProtectedRouteForAdmin>
            } />

            <Route path="allGstBlog" element={
              <ProtectedRouteForAdmin>
                <AllGstBlog />
              </ProtectedRouteForAdmin>
            } />

            <Route path="addIncomeTaxBlog" element={
              <ProtectedRouteForAdmin>
                <AddIncomeTaxBlog />
              </ProtectedRouteForAdmin>
            } />
            <Route path="allIncomeTaxBlog" element={
              <ProtectedRouteForAdmin>
                <AllIncomeTaxBlog />
              </ProtectedRouteForAdmin>
            } />
            {/* <Route path="contactdetails" element={
            <ProtectedRouteForAdmin>
              <ContactDetails />
            </ProtectedRouteForAdmin>
          } /> */}


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


// user 

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

// admin 

const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log("object", user);

  if (user && user.email === "janvipatidar33@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/'} />
  }

}
// test@gmail.com
// 123456