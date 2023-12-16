import { useEffect, useState } from "react";
import classes from "./Market.module.scss";
import MarketItems from "./MarketItems";
import Pagination from "./Pagination/Pagination";
import useFetchCoins from "../../hooks/useFetchedCoins";

const Market = () => {
  const { coins, loading, error } = useFetchCoins();
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
        <div className={classes["market__content"]}>
          <div className={classes["market-items-info"]}>
            <p>Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
          <MarketItems coins={currentCoins} loading={loading} error={error} />
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
