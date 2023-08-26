import classes from "./TopCryptoCurrencies.module.css";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";
import useFetchCoins from "../../../hooks/useFetchedCoins";

const TopCryptoCurrencies = () => {
  const { coins, loading } = useFetchCoins([]);
  return (
    <div className={classes["top-crypto-currencies"]}>
      <div className="container">
        <h1>
          Trade with all
          <br />
          <span className={classes["span1"]}>crypto currencies</span> online
        </h1>
        <h2>Most popular crypto right now</h2>
        <div className={`row ${classes["top-crypto-items"]}`}>
          {loading && <Spinner />}
          {coins.slice(0, 4).map((topCoin) => {
            return (
              <div
                key={topCoin.id}
                className={`col-md-3 ${classes["top-crypto-item"]}`}
              >
                <Link to={`coins/${topCoin.id}`}>
                  <div className={classes["top-crypto-img"]}>
                    <img src={topCoin.image} alt="" />
                  </div>
                  <h3>
                    {topCoin.name}
                    <span
                      className={
                        topCoin.market_cap_change_percentage_24h > 0
                          ? classes.positive
                          : classes.negative
                      }
                    >
                      {topCoin.market_cap_change_percentage_24h.toFixed(2)}%
                    </span>
                  </h3>
                  <p>
                    {new Intl.NumberFormat("en-us", {
                      style: "currency",
                      currency: "USD",
                    }).format(topCoin.current_price)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCryptoCurrencies;
