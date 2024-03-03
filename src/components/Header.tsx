import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import germanyFlag from "../styles/images/germany-flag.svg";
import logo from "../styles/images/logo.png";
import ukFlag from "../styles/images/uk.svg";
import { defaultLanguages } from "../helpers/language";
import TypingAnimation from "./TypeAnimation";

const Header = () => {
  const [actionContainerHeight, setActionContainerHeight] = useState(0);
  const actionContainerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [menuLeftPosition, setMenuLeftPosition] = useState(0);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const repositionMenu = () => {
    if (menuRef.current) {
      const { height } = menuRef.current.getBoundingClientRect();
      setMenuHeight(height);
    }
    const menuButton = menuButtonRef.current;
    if (menuButton) {
      const menuButtonPosition = menuButton.getBoundingClientRect();
      const menuWidth = menuRef.current?.offsetWidth || 0;
      const left = menuButtonPosition.right + 12 - menuWidth;
      setMenuLeftPosition(left > 0 ? left : 0);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", repositionMenu);
    return () => {
      window.removeEventListener("resize", repositionMenu);
    };
  }, []);

  useEffect(() => {
    if (actionContainerRef.current && actionContainerRef.current.offsetHeight) {
      setActionContainerHeight(actionContainerRef.current.offsetHeight);
    }
  }, [actionContainerRef.current?.offsetHeight]);

  useEffect(() => {
    repositionMenu();
  }, [menuRef.current?.offsetHeight, isMenuOpen]);

  return (
    <header className="header d-md-flex justify-content-md-between px-md-4 align-items-md-center">
      <nav className="header-navbar navbar">
        <div className="header-navbar-container d-flex justify-content-between align-items-center">
          <Link
            className="header-brand d-flex text-center justify-content-between align-items-center"
            to="/"
          >
            <img className="" src={logo} alt="ansumana" />
            <TypingAnimation />
           {/*  <p className="header-brand-text align-self-end align-self-md-center text-uppercase fw-bolder">
              Ansumana Darboe
            </p> */}
          </Link>
          <div
            className={`header-toggler d-md-none ${isMenuOpen ? " open" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            ref={menuButtonRef}
          >
            <div className="span bar-one"></div>
            <div className="span bar-two"></div>
            <div className="span bar-three"></div>
          </div>
        </div>
      </nav>
      <Menu
        actionContainerHeight={actionContainerHeight}
        isMenuOpen={isMenuOpen}
        menuButtonRef={menuButtonRef}
        menuHeight={menuHeight}
        menuLeftPosition={menuLeftPosition}
        menuRef={menuRef}
        repositionMenu={repositionMenu}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

type MenuItem = {
  label: string;
  url?: string;
  state?: any;
  blank?: boolean;
  items?: MenuItem[];
  icon?: any;
};

const Menu: React.FC<{
  actionContainerHeight: number;
  isMenuOpen: boolean;
  menuButtonRef: React.RefObject<HTMLDivElement>;
  menuHeight: number;
  menuLeftPosition: number;
  menuRef: React.RefObject<HTMLUListElement>;
  repositionMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isMenuOpen,
  menuButtonRef,
  menuHeight,
  menuLeftPosition,
  menuRef,
  repositionMenu,
  setIsMenuOpen,
}) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const menuContent: MenuItem[] = [
    { label: `${t(`header.home`)}`, url: "/" },
   /*  { label: `${t("header.links.about.label")}`, url: "/about" }, */
    { label: `${t("header.links.testimonials.label")}`, url: "/testimonials" },
    { label: `${t("header.links.contact.label")}`, url: "/contact" },
    {
      label: `${t("header.language")}`,
      icon: i18n.language === "en" ? ukFlag : germanyFlag,
      items: defaultLanguages,
    },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleSelectChange = async (lng: any) => {
    const language = lng.slice(0, 2).toLowerCase();
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  const fetchMenuItem = (item: MenuItem, index: number) => {
    const isActive = item.url === pathname;

    return (
      <li
        className="position-relative"
        key={index}
        onClick={() => repositionMenu()}
      >
        {item.items?.length ? (
          <div className="dropdown">
            <div
              role="button"
              data-bs-toggle="dropdown"
              className="dropdown-button btn btn-sm btn-outline-primary dropdown-toggle text-center my-4"
              aria-expanded="false"
              style={{
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${item.icon})`,
              }}
            ></div>
            <ul className="dropdown-menu header-submenu my-2">
              {defaultLanguages.map((language: any, index) => (
                <span
                  key={language.value}
                  className="dropdown-item nav-item"
                  onClick={() => handleSelectChange(language.value)}
                >
                  {language.label}
                </span>
              ))}
            </ul>
          </div>
        ) : (
          <div className="d-flex header-menu-item">
            <Link
              className={`btn btn-sm fw-bolder header-menu-item-link text-uppercase ${
                isActive ? " link-active" : ""
              }`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              rel={item.blank ? "noopener noreferrer" : ""}
              target={item.blank ? "_blank" : ""}
              to={{ pathname: item.url }}
            >
              {item.label}
            </Link>
          </div>
        )}
      </li>
    );
  };

  return (
    <ul
      className={`header-menu d-md-flex ${isMenuOpen ? " open" : ""}`}
      ref={menuRef}
      style={{
        top: isMenuOpen ? "100%" : `calc(100% - ${menuHeight}px)`,
        left: menuLeftPosition,
      }}
    >
      {menuContent.map(fetchMenuItem)}
    </ul>
  );
};

export default Header;
