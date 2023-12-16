import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={classes.footer}>
      <div className={classes["footer__img"]}>
        <img src="/img/footer-img.png" alt="" />
      </div>
      <div className="container">
        <div className={classes["footer__row"]}>
          <div>
            <div className={classes["logo-img"]} onClick={scrollToTop}>
              <img src="/img/logo-img.png" alt="" />
            </div>
          </div>
          <div>
            <ul className={classes["nav-list"]}>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="Market"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className={classes["nav-link"]}
                >
                  Market
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="How-It-Works"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className={classes["nav-link"]}
                >
                  How It Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="Faq"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className={classes["nav-link"]}
                >
                  FAQ
                </ScrollLink>
              </li>
            </ul>
            <div className={classes["privacy-terms"]}>
              <a href="#0">Privacy Policy</a>
              <a href="#0">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
