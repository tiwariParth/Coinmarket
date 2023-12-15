import React, { useState, useEffect } from "react";
import axios from "axios";
// coinrankingd6528f7b3f66c6db6793db09c2c37a69f7eb140fb164442f
const App = () => {
  const [coinsData, setCoinsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coinranking.com/v2/coins",
          {
            headers: {
              "X-RapidAPI-Key":
                "coinrankingd6528f7b3f66c6db6793db09c2c37a69f7eb140fb164442f",
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCoinsData(response.data.data.coins.slice(0, 10));
        console.log(response.data.data.coins);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Coins</h1>
      {coinsData && (
        <div className="flex h-[100vh] justify-center items-center mx-[120px]">
          <ul className="flex flex-wrap gap-[5rem]">
            {coinsData.map((coin) => (
              <li
                key={coin.uuid}
                className="flex items-center flex-col justify-center gap-10"
              >
                <h2>{coin.name}</h2>
                <img src={coin.iconUrl} alt={coin.name} className="w-[50px]" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
