import { useEffect, useState } from "react";
import classes from "./Market.module.css";
import MarketItems from "./MarketItems";
import Pagination from "./Pagination/Pagination";
import useFetchCoins from "../../hooks/useFetchedCoins";

const Market = () => {
  const { coins, loading } = useFetchCoins([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const [numberPerPage] = useState(10);

  const startIndex = (currentPage - 1) * numberPerPage;
  const endIndex = currentPage * numberPerPage;
  const currentCoins = coins.slice(startIndex, endIndex);

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={classes.market} id="Market">
        <div className={classes["market-content"]}>
          <div className={classes["crypto-items"]}>
            <div className={classes["crypto-items-info"]}>
              <p>Coin</p>
              <p>Price</p>
              <p>24h Change</p>
              <p>Market Cap</p>
            </div>
            <MarketItems coins={currentCoins} loading={loading} />
          </div>
        </div>
      </div>
      <Pagination
        totalCoins={coins.length}
        numberPerPage={numberPerPage}
        paginate={paginate}
        active={active}
      />
    </>
  );
};

export default Market;
