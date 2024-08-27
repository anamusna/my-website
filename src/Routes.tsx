import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Blogs } from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Workflow from "./pages/Workflow";
import { useTranslation } from "react-i18next";
import { useTranslatedPaths } from "./helpers/use-translated-paths";

const AppRouter = () => {
  const { i18n } = useTranslation();
  const { contact, testimonials, about } = useTranslatedPaths();

  const currentLang = i18n.language;

  const redirectRoutes = [
    { path: "/testimonials", to: `${currentLang}${testimonials}` },
    { path: "/referenzen", to: `${currentLang}${testimonials}` },
    { path: "/blog", to: `${currentLang}/blog` },
    { path: "/contact", to: `${currentLang}${contact}` },
    { path: "/about", to: `${currentLang}${about}` },
    { path: "/über", to: `${currentLang}${about}` },
    { path: "/kontakt", to: `${currentLang}${contact}` },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/:lang/" element={<Home />} />
        <Route path={`/${currentLang}${contact}`} element={<Contact />} />
        <Route path={`/${currentLang}${about}`} element={<About />} />
        <Route
          path={`/${currentLang}${testimonials}`}
          element={<Testimonials />}
        />
        <Route path={`/${currentLang}/blog`} element={<Blogs />} />
        <Route
          path="/"
          element={<Navigate replace to={`/${currentLang}`} />}
        />

        {redirectRoutes.map(({ path, to }) => (
          <Route key={path} path={path} element={<Navigate replace to={to} />} />
        ))}

        <Route path="/:lang/testimonials" element={<Navigate replace to={`${currentLang}${testimonials}`} />} />
        <Route path="/:lang/contact" element={<Navigate replace to={`${currentLang}${contact}`} />} />
        <Route path="/:lang/about" element={<Navigate replace to={`${currentLang}${about}`} />} />
        <Route path="/:lang/referenzen" element={<Navigate replace to={`${currentLang}${testimonials}`} />} />
        <Route path="/:lang/über" element={<Navigate replace to={`${currentLang}${about}`} />} />
        <Route path="/:lang/kontakt" element={<Navigate replace to={`${currentLang}${contact}`} />} />
        <Route path="/:lang/flow" element={<Workflow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
