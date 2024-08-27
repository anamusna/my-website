import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import germanyFlag from "../styles/images/germany-flag.svg";
import logo from "../styles/images/avatar.png";
import ukFlag from "../styles/images/uk.svg";
import { defaultLanguages } from "../helpers/language";
import { HashLink } from "react-router-hash-link";
import { useScrollToDiv } from "../helpers/back-to-top";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../ThemeContext";
import { useThemeStyles } from "../helpers/use-theme-styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [menuLeftPosition, setMenuLeftPosition] = useState(0);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [sectionRefs, goToSection] = useScrollToDiv();

  const { theme, setTheme } = useContext(ThemeContext);

  const { backgroundColor, textColor } = useThemeStyles(theme);

  const repositionMenu = () => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.getBoundingClientRect().height);
    }

    if (menuButtonRef.current && menuRef.current) {
      const menuButtonPosition = menuButtonRef.current.getBoundingClientRect();
      const menuWidth = menuRef.current.offsetWidth;
      const left = menuButtonPosition.right + 12 - menuWidth;
      setMenuLeftPosition(Math.max(left, 0));
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", repositionMenu);
    return () => window.removeEventListener("resize", repositionMenu);
  }, []);

  useEffect(() => {
    repositionMenu();
  }, [isMenuOpen]);

  return (
    <header
      className={`header d-md-flex justify-content-md-between px-md-4 align-items-md-center ${backgroundColor}`}
      id="navbar"
    >
      <nav className={`header-navbar navbar ${backgroundColor}`}>
        <div className="header-navbar-container d-flex justify-content-between align-items-center">
          <Link
            className={`header-brand d-flex text-center justify-content-between align-items-center gap-3 ${textColor}`}
            to="/"
          >
            <div className={`header-brand-img ${backgroundColor}`}>
              <img className="img-fluid" src={logo} alt="ansumana" />
            </div>
            <div className="logo-container">
              <span className="logo header-brand-text align-self-end align-self-md-center text-uppercase fw-bolder">
                Ansumana Darboe
              </span>
            </div>
          </Link>
          <div
            className={`header-toggler d-md-none ${isMenuOpen ? "open" : ""}`}
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="span bar-one" />
            <div className="span bar-two" />
            <div className="span bar-three" />
          </div>
        </div>
      </nav>
      <Menu
        isMenuOpen={isMenuOpen}
        menuButtonRef={menuButtonRef}
        menuHeight={menuHeight}
        menuLeftPosition={menuLeftPosition}
        menuRef={menuRef}
        repositionMenu={repositionMenu}
        setIsMenuOpen={setIsMenuOpen}
        sectionRefs={sectionRefs}
        goToSection={goToSection}
      />
    </header>
  );
};

type MenuProps = {
  isMenuOpen: boolean;
  menuButtonRef: React.RefObject<HTMLDivElement>;
  menuHeight: number;
  menuLeftPosition: number;
  menuRef: React.RefObject<HTMLUListElement>;
  repositionMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  goToSection: (section: any) => void;
};

type MenuItem = {
  label: string;
  url?: string;
  state?: any;
  blank?: boolean;
  items?: MenuItem[];
  icon?: any;
};

const Menu = ({
  isMenuOpen,
  menuButtonRef,
  menuHeight,
  menuLeftPosition,
  menuRef,
  repositionMenu,
  setIsMenuOpen,
}: MenuProps) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDropdownOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isDarkTheme = theme === "dark";
  const { backgroundColor, textColor } = useThemeStyles(theme);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const closeIcon = () => {
    setDropdownIsOpen(false);
  };

  const toggleDropdown = () => {
    if (isMenuOpen) {
      setDropdownIsOpen((prev) => !prev);
    } else {
      setDropdownIsOpen(true);
      setIsMenuOpen(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
      setDropdownIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setDropdownIsOpen(false);
  };

  const menuContent: MenuItem[] = [
    {
      label: `${t("about.title")}`,
      items: [
        {
          label: `${t("header.links.about.label")}`,
          url: `/#${t("header.links.about.url")}`,
        },
        {
          label: `${t("header.links.services.label")}`,
          url: `/#${t("header.links.services.url")}`,
        },
        {
          label: `${t("header.links.technologies.label")}`,
          url: `/#${t("header.links.technologies.url")}`,
        },
        {
          label: `${t("header.links.process.label")}`,
          url: `/#${t("header.links.process.url")}`,
        },
        {
          label: `${t("header.links.testimonials.label")}`,
          url: `/#${t("header.links.testimonials.url")}`,
        },
      ],
    },
    {
      label: `${t("header.links.blog.label")}`,
      url: `/#${t("header.links.blog.url")}`,
    },
    {
      label: `${t("header.links.contact.label")}`,
      url: `/#${t("header.links.contact.url")}`,
    },
  ];

  const handleSelectChange = async (lng: string) => {
    const language = lng.slice(0, 2).toLowerCase();
    i18n.changeLanguage(language);
    const newPathname = `/${i18n.language}${pathname.substring(3)}`;
    navigate(newPathname);
    setIsMenuOpen(false);
    setDropdownIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    setTheme(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const useMenuItem = (item: MenuItem, index: number) => {
    const isActive = item.url === pathname;

    return (
      <li
        className="position-relative d-flex align-items-center py-md-3"
        key={item.label}
        onClick={() => repositionMenu()}
      >
        {item.items?.length ? (
          <div className="dropdown header-menu-item" ref={dropdownRef}>
            <button
              type="button"
              data-bs-toggle="dropdown"
              className={`btn text-center btn-sm btn-icon fw-bolder header-menu-item-link text-uppercase nav-item ms-2 ${textColor}`}
              aria-expanded={false}
              onClick={() => toggleDropdown()}
            >
              <label>{item.label}</label>
              <FontAwesomeIcon
                className="float-end icon"
                icon={
                  isMenuOpen && isDropdownOpen ? faChevronUp : faChevronDown
                }
                size="1x"
                fixedWidth
              />
            </button>
            <ul
              className={`mt-md-3 pt-2 pt-md-0 mx-md-2 dropdown-menu box-shadow-xl header-submenu text-start ${backgroundColor}`}
            >
              {item.items.map((subItem) => (
                <div
                  key={subItem.label}
                  className="show w-100 d-flex align-self-start"
                >
                  <HashLink
                    className={`mx-md-2 btn btn-sm dropdown-item ${textColor} ${
                      isActive ? "link-active" : ""
                    }`}
                    onClick={handleLinkClick}
                    to={`${i18n.language}${subItem.url}`}
                  >
                    <label>{subItem.label}</label>
                  </HashLink>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div className="d-flex header-menu-item mx-md-2 py-md-1">
            <HashLink
              className={`btn btn-sm header-menu-item-link nav-item ${textColor} ${
                isActive ? "link-active" : ""
              }`}
              onClick={handleLinkClick}
              to={`${i18n.language}${item.url}`}
            >
              <label>{item.label}</label>
            </HashLink>
          </div>
        )}
      </li>
    );
  };

  return (
    <ul
      className={`header-menu d-md-flex my-auto text-start align-items-center justify-content-center ${backgroundColor} ${
        isMenuOpen ? "open" : ""
      }`}
      ref={menuRef}
      style={{
        top: isMenuOpen ? "100%" : `calc(100% - ${menuHeight}px)`,
        left: menuLeftPosition,
      }}
    >
      <div className="mb-3 mb-md-0 header-theme d-flex flex-wrap align-items-center justify-content-center">
        <div className="theme">
          <div className="theme__switcher mx-3">
            <div className="checkbox">
              <input
                type="checkbox"
                id="theme_switcher"
                onChange={toggleTheme}
                checked={!isDarkTheme}
                name="theme"
              />
              <label htmlFor="theme_switcher" />
            </div>
          </div>
        </div>
      </div>
      {menuContent.map(useMenuItem)}
      <li className="dropdown d-flex align-items-center">
        <div
          role="button"
          data-bs-toggle="dropdown"
          className="mb-2 mb-md-0 px-md-2 dropdown-button dropdown-toggle text-center"
          aria-expanded="false"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${
              i18n.language === "en" ? ukFlag : germanyFlag
            })`,
          }}
          onClick={closeIcon}
        />
        <ul
          className={`my-md-3 dropdown-menu header-submenu align-items-center justify-content-center ${backgroundColor}`}
        >
          {defaultLanguages.map((language) => (
            <span
              key={language.label}
              className={`dropdown-item nav-item ${textColor}`}
              onClick={() => handleSelectChange(language.value)}
            >
              {language.label}
            </span>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Header;
