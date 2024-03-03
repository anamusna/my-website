import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash && !location.state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate replace to="/" />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
