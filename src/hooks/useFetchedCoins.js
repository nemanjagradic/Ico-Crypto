import { useState, useEffect } from "react";

function useFetchCoins(initialData) {
  const [coins, setCoins] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
      );
      if (!response.ok) {
        console.log("Some error occurred");
      }
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    };

    fetchCoins();
  }, []);

  return { coins, loading };
}

export default useFetchCoins;
