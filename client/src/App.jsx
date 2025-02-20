import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AdminRoutes from "./admin/AdminRoutes"; // Admin-specific routes
import ContactUs from "./pages/ContactUs";
import RealEsate from "./pages/RealEsate";
import Insurance from "./pages/Insurance";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <>
      <div className="">
        {/* Nested Admin Routes */}
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />

          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/real-estate" element={<RealEsate />} />
                  <Route path="/insurance" element={<Insurance />} />
                  <Route path="/blogs" element={<Blogs />} />

                  {/* 404 Not Found Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
