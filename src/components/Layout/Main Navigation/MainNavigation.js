import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainNavigation.module.scss";
import {
  faXmark,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const scrollLinks = ["Market", "How It Works", "FAQ"];

const MainNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    setShowNav(true);
  };
  const closeNav = () => {
    setShowNav(false);
  };
  const { currencyId } = useParams();
  return (
    <>
      <div
        className={classes["resposnive-menu"]}
        style={{ left: showNav ? "0" : "-100%" }}
      >
        <div className={classes["close-btn"]} onClick={closeNav}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className={classes["responsive-menu__list"]}>
          {!currencyId ? (
            <li className={classes["responsive-menu__list--item"]}>
              <ScrollLink
                to="Home"
                spy={true}
                smooth={true}
                offset={-50}
                delay={250}
                duration={500}
                className={classes["nav-link"]}
                onClick={closeNav}
              >
                Home
              </ScrollLink>
            </li>
          ) : (
            <li className={classes["responsive-menu__list--item"]}>
              <Link to="/" className={classes["nav-link"]}>
                <FontAwesomeIcon icon={faChevronLeft} /> Home
              </Link>
            </li>
          )}
          {scrollLinks.map((link) => {
            return (
              !currencyId && (
                <li
                  className={classes["responsive-menu__list--item"]}
                  key={link}
                >
                  <ScrollLink
                    to={link.replaceAll(" ", "-")}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    delay={250}
                    duration={500}
                    className={classes["nav-link"]}
                    onClick={closeNav}
                  >
                    {link}
                  </ScrollLink>
                </li>
              )
            );
          })}
        </ul>
      </div>
      <div id="Home" className={`${classes.home}`}>
        <nav className={`container ${classes.nav}`}>
          <div className={`${classes["nav__col"]}`}>
            <Link to="/">
              <div className={classes["nav__logo"]}>
                <img src="/img/logo-img.png" alt="" />
              </div>
            </Link>
          </div>
          <div className={`${classes["nav__col"]}`}>
            <ul className={classes["nav__list"]}>
              {!currencyId ? (
                <li className="nav__list--item">
                  <ScrollLink
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    delay={250}
                    duration={500}
                    className={classes["nav-link"]}
                  >
                    Home
                  </ScrollLink>
                </li>
              ) : (
                <li>
                  <Link to="/" className={classes["nav-link"]}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Home
                  </Link>
                </li>
              )}
              {scrollLinks.map((link) => {
                return (
                  !currencyId && (
                    <li key={link}>
                      <ScrollLink
                        to={link.replaceAll(" ", "-")}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        delay={250}
                        className={classes["nav-link"]}
                        onClick={closeNav}
                      >
                        {link}
                      </ScrollLink>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
          <div className={`${classes["nav__col"]}`}>
            <div className={classes["menu-icon"]} onClick={openNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={classes["nav__icons"]}>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDiscord} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNavigation;
