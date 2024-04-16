import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import { useTranslation } from "react-i18next";
import { useTranslatedPaths } from "./helpers/use-translated-paths";

const AppRouter = () => {
  const { t, i18n } = useTranslation();
  const { contact, testimonials } = useTranslatedPaths();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/:lang/" element={<Home />} />
        <Route path={`/${i18n.language}${contact}`} element={<Contact />} />
        <Route
          path={`/${i18n.language}${testimonials}`}
          element={<Testimonials />}
        />
        <Route
          path="/"
          element={<Navigate replace to={`/${i18n.language}`} />}
        />
        <Route
          path="/:lang/testimonials"
          element={<Navigate replace to={`/${i18n.language}${testimonials}`} />}
        />
        <Route
          path="/testimonials"
          element={<Navigate replace to={`/${i18n.language}${testimonials}`} />}
        />
        <Route
          path="/blog"
          element={<Navigate replace to={`/${i18n.language}/blog`} />}
        />
        <Route
          path="/:lang/referenzen"
          element={<Navigate replace to={`/${i18n.language}${testimonials}`} />}
        />
        <Route
          path="/referenzen"
          element={<Navigate replace to={`/${i18n.language}${testimonials}`} />}
        />
        <Route
          path="/:lang/contact"
          element={<Navigate replace to={`/${i18n.language}${contact}`} />}
        />
        <Route
          path="/contact"
          element={<Navigate replace to={`/${i18n.language}${contact}`} />}
        />
        <Route
          path="/:lang/kontakt"
          element={<Navigate replace to={`/${i18n.language}${contact}`} />}
        />
        <Route
          path="/kontakt"
          element={<Navigate replace to={`/${i18n.language}${contact}`} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
