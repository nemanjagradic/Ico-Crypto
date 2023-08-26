import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainNavigation.module.css";
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
import "bootstrap/dist/css/bootstrap.css";
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
        <ul className={classes["nav-list"]}>
          {!currencyId ? (
            <li>
              <Link to="/" className={classes["nav-link"]} onClick={closeNav}>
                Home
              </Link>
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
                    duration={300}
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
      <div className={`${classes.home} ${classes["nav-introduction"]}`}>
        <nav className="container row align-items-center">
          <div className={`col-md-4 ${classes["nav-col"]}`}>
            <Link to="/">
              <div className={classes["logo-img"]}>
                <img src="/img/logo-img.png" alt="" />
              </div>
            </Link>
          </div>
          <div className={`col-md-5 ${classes["nav-col"]}`}>
            <ul className={classes["nav-list"]}>
              {!currencyId ? (
                <li>
                  <Link to="/" className={classes["nav-link"]}>
                    Home
                  </Link>
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
                        duration={300}
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
          <div className={`col-md-3 ${classes["nav-col"]}`}>
            <div className={classes["menu-icon"]} onClick={openNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={classes["nav-icons"]}>
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
