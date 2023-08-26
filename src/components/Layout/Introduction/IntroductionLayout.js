import { useRef, useState, useEffect } from "react";
import useStickyNav from "../../../hooks/useStickyNav";
import classes from "./IntroductionLayout.module.css";
/* eslint-disable no-unused-vars */

const IntroductionLayout = () => {
  const [runAgain, setRunAgain] = useState(false);
  useEffect(() => {
    // da bi se rerenderovao page zbog nav elementa i izvrsavanja useStickyNav
    setRunAgain(true);
  }, []);
  const introduction = useRef();
  useStickyNav(introduction.current, { root: null, threshold: 0.5 });
  return (
    <div className={classes["introduction"]} ref={introduction}>
      <div className="container row align-items-center mx-auto">
        <div className={`col-md-6 ${classes["introduction-content"]}`}>
          <h1>Buy & sell crypto easily</h1>
          <p>
            Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto
            trading app.
          </p>
        </div>
        <div className={`col-md-6 ${classes["introduction-images"]}`}>
          <div className={classes["introduction-main-img"]}>
            <img src="/img/coins.png" alt="" />
          </div>
          <div className={classes["introduction-coin-1"]}>
            <img src="/img/coin-1.png" alt="" />
          </div>
          <div className={classes["introduction-coin-2"]}>
            <img src="/img/coin-2.png" alt="" />
          </div>
          <div className={classes["introduction-coin-3"]}>
            <img src="/img/coin-3.png" alt="" />
          </div>
          <div className={classes["introduction-coin-4"]}>
            <img src="/img/coin-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionLayout;
