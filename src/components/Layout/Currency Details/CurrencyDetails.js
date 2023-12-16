import classes from "./CurrencyDetails.module.scss";
import navClasses from "../Main Navigation/MainNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const CurrencyDetails = () => {
  const { currencyId } = useParams();
  const [currentCoin, setCurrentCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(`.${navClasses.nav}`);
    nav.classList.remove(navClasses["nav__sticky"]);
    nav.classList.add("container");
  }, []);

  useEffect(() => {
    const fetchCurrentCoin = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${currencyId}?localization=true&tickers=true&market_data=true`
      );
      if (!response.ok) {
        throw new Error("Some error occured");
      }
      const data = await response.json();
      setCurrentCoin(data);
      setLoading(false);
    };

    fetchCurrentCoin().catch((err) => {
      setError(true);
      setLoading(false);
    });
  }, [currencyId]);

  if (currentCoin) {
    console.log(currentCoin);
  }

  return (
    <div className={classes["coin-details"]}>
      {loading && !error && <Spinner />}
      {error && (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Failed to fetch! Too many requests.
        </p>
      )}
      {currentCoin && (
        <div className="container">
          <div className={classes["coin-details__row"]}>
            <div className={classes["coin-main"]}>
              <h1>{currentCoin.name}</h1>
              <div className={classes["coin-main__img"]}>
                <img src={currentCoin.image.large} alt="" />
              </div>
            </div>
            <div className={classes["coin-desc"]}>
              <div className={classes["coin-desc__info"]}>
                <p>Rank: #{currentCoin.market_cap_rank}</p>
                <p>
                  24h Change:{" "}
                  <span
                    className={
                      currentCoin.market_data.market_cap_change_percentage_24h >
                      0
                        ? classes.positive
                        : classes.negative
                    }
                  >
                    {currentCoin.market_data.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </span>
                </p>
                <p>
                  Price:{" "}
                  <span className={classes["positive-pr"]}>
                    {new Intl.NumberFormat("en-us", {
                      style: "currency",
                      currency: "USD",
                    }).format(currentCoin.tickers[4].last)}
                  </span>
                </p>
                <p>
                  <a href={currentCoin.links.homepage[0]}>
                    <FontAwesomeIcon icon={faHouse} />
                  </a>
                </p>
              </div>
              <p className={classes["coin-desc__info__bigP"]}>
                {currentCoin.description.en}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDetails;
