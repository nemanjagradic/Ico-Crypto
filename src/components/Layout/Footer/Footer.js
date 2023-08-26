import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className={classes["footer-img"]}>
        <img src="/img/footer-img.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={classes["logo-img"]} onClick={scrollToTop}>
              <img src="/img/logo-img.png" alt="" />
            </div>
            <div className={classes["nav-icons"]}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-discord"></i>
            </div>
          </div>
          <div className="col-md-9">
            <ul className={classes["nav-list"]}>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="market"
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
                  to="how-it-works"
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
                  to="faq"
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
