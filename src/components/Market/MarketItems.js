import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import classes from "./MarketItems.module.css";

const MarketItems = ({ coins, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={classes["crypto-all-items"]}>
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
              <div className={classes["crypto-content"]}>
                <div className={classes["crypto-img-title"]}>
                  <div className={classes["crypto-image"]}>
                    <img src={coin.image} alt="" />
                  </div>
                  <p>{coin.name}</p>
                </div>
                <div className={classes["crypto-price"]}>{price}</div>
                <div className={classes["crypto-change"]}>
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
                <div className={classes["crypto-cap"]}>
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
