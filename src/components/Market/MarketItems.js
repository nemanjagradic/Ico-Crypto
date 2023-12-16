import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import classes from "./MarketItems.module.scss";

const MarketItems = ({ coins, loading, error }) => {
  if (loading && !error) {
    return <Spinner />;
  }
  return (
    <div className={classes["crypto-all-items"]}>
      {error && (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Failed to fetch! Too many requests.
        </p>
      )}
      {coins.map((coin) => {
        const marketCap = new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(coin.market_cap);
        const price = new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(coin.current_price);

        return (
          <div className={classes["crypto-item"]} key={coin.id}>
            <Link to={`/coins/${coin.id}`}>
              <div className={classes["crypto-item__content"]}>
                <div className={classes["crypto-item__img-title"]}>
                  <div className={classes["crypto-item__image"]}>
                    <img src={coin.image} alt="" />
                  </div>
                  <p>{coin.name}</p>
                </div>
                <div className={classes["crypto-item__price"]}>{price}</div>
                <div className={classes["crypto-item__change"]}>
                  <span
                    className={
                      coin.market_cap_change_percentage_24h > 0
                        ? classes.positive
                        : classes.negative
                    }
                  >
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <div className={classes["crypto-item__cap"]}>
                  <p>{marketCap}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MarketItems;
