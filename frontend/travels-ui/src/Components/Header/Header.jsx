import { useEffect, useRef } from "react";

import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const options = [
    { value: "en", label: "English" },
    { value: "vi", label: "Tiếng Việt" },
  ];

  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    const lng = value;
    i18n.changeLanguage(lng);
  };
  const navLinks = [
    {
      path: "/home",
      display: t("home"),
    },
    {
      path: "/about",
      display: t("aboutUs"),
    },
    {
      path: "/tours",
      display: t("tour"),
    },
  ];
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const handleStickyHeader = () => {
    const headerHeight = headerRef.current.clientHeight;
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > headerHeight ||
        document.documentElement.scrollTop > headerHeight
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };
  return (
    <header
      className="w-full h-[80px] flex items-center justify-center transition-all border-b"
      ref={headerRef}
    >
      <Container>
        <Row>
          <div className="flex items-center justify-between gap-4">
            <span className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <AiOutlineMenu className="w-6 h-6" />
            </span>
            {/* ________Logo________  */}
            <div className="">
              <figure className="w-full">
                <Link to="/">
                  <img
                    className="hidden sm:w-[30%] sm:block"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
              </figure>
            </div>
            {/* ________menu start________  */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div
                className="wrap__menu"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div
                  className="lg:hidden flex justify-between mt-3 mx-2"
                  onClick={toggleMenu}
                >
                  <div>
                    <Select
                      defaultValue={i18n.language}
                      style={{ width: 120 }}
                      onChange={changeLanguage}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      options={options}
                    />
                  </div>
                  <BiX
                    className="w-8 h-8 border-2 border-transparent border-solid rounded-md transition ease-linear duration-200
                    hover:border-slate-950  cursor-pointer"
                  />
                </div>
                <ul className="menu mb-0 flex items-center justify-between gap-6">
                  {navLinks.map((nav, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          to={nav.path}
                          className={(navClass) =>
                            navClass.isActive
                              ? "font-[500] text-[1.1rem] text-secondaryColor cursor-default border-b border-solid border-secondaryColor w-max block"
                              : "text-headingColor font-[500] text-[1.1rem] hover:text-secondaryColor w-max block"
                          }
                        >
                          {nav.display}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* ________menu end________  */}

            <div className="flex items-center justify-between gap-3">
              <div className="hidden lg:block">
                <Select
                  defaultValue={i18n.language}
                  style={{ width: 120 }}
                  onChange={changeLanguage}
                  options={options}
                />
              </div>
              <button className="btn__customer hover:underline hover:shadow-none secondary__btn transition-all">
                <Link to="/login">{t("login")}</Link>
              </button>
              <button className="btn__customer primary__btn">
                <Link to="/register">{t("register")}</Link>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
