import { useState, useEffect } from "react";

function useFetchCoins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
      );
      if (!response.ok) {
        throw new Error("Some error occured");
      }
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    };

    fetchCoins().catch((err) => {
      setError(true);
    });
  }, []);

  return { coins, loading, error };
}

export default useFetchCoins;
