import { useRef, useState, useEffect } from "react";
import useStickyNav from "../../../hooks/useStickyNav";
import classes from "./IntroductionLayout.module.scss";
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
    <div id="introduction" className={classes.introduction} ref={introduction}>
      <div className={`container ${classes["introduction__row"]}`}>
        <div className={`${classes["introduction__content"]}`}>
          <h1>Buy & sell crypto easily</h1>
          <p>
            Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto
            trading app.
          </p>
        </div>
        <div className={`${classes["introduction__images"]}`}>
          <div className={classes["introduction__images__main-img"]}>
            <img src="/img/coins.png" alt="" />
          </div>
          <div className={classes["introduction__images__coin-1"]}>
            <img src="/img/coin-1.png" alt="" />
          </div>
          <div className={classes["introduction__images__coin-2"]}>
            <img src="/img/coin-2.png" alt="" />
          </div>
          <div className={classes["introduction__images__coin-3"]}>
            <img src="/img/coin-3.png" alt="" />
          </div>
          <div className={classes["introduction__images__coin-4"]}>
            <img src="/img/coin-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionLayout;
