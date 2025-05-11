import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <section className="w-full flex justify-center items-center flex-col gap-6 py-8 px-4 sm:px-6 md:px-10 overflow-x-hidden">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-[90%]">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight">
          Largest <br />
          Crypto Marketplace
        </p>
        <p className="text-gray-300 text-sm sm:text-base">
          Welcome to the world's largest cryptocurrency marketplace.
          <br /> Sign up to explore more about cryptos.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-[375px] sm:max-w-md md:max-w-lg px-1">
        <form action="" onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            className="bg-white text-black font-semibold text-sm sm:text-base p-3 pr-28 w-full rounded-lg border border-gray-300 focus:outline-none"
            type="search"
            placeholder="Search Coin..."
            list="coinlist"
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button className="bg-gray-700 text-white p-2 px-4 sm:px-6 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg cursor-pointer font-semibold hover:bg-gray-600 transition text-sm sm:text-base">
            Search
          </button>
        </form>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 py-3 px-3 w-full max-w-[375px] sm:max-w-3xl md:max-w-5xl bg-gray-700 rounded-lg font-medium text-xs sm:text-sm md:text-base text-white">
        <p className="col-span-1 text-center truncate">#</p>
        <p className="col-span-3 sm:col-span-3   truncate">Coin</p>
        <p className="col-span-2 text-right truncate">Price</p>
        <p className="col-span-3 text-right truncate">24h Change</p>
        <p className="col-span-3 text-right truncate">Market Cap</p>
      </div>

      {/* Coin Rows */}
      {displayCoin.slice(0, 15).map((item, index) => (
        <div
          className="grid grid-cols-12 gap-2 items-center py-3 px-3 w-full max-w-[375px] sm:max-w-3xl md:max-w-5xl bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition text-xs sm:text-sm md:text-base text-white"
          key={index}
        >
          {/* Rank */}
          <p className="col-span-1 text-center font-medium truncate">
            {item.market_cap_rank}
          </p>

          {/* Coin Info */}
          <div className="col-span-3 sm:col-span-3 flex items-center gap-2 truncate">
            <img
              className="w-5 h-5 sm:w-8 sm:h-8"
              src={item.image}
              alt={item.name}
            />
            <div>
              <p className="font-semibold truncate">{item.name}</p>
              <p className="text-[10px] uppercase text-gray-400">
                {item.symbol}
              </p>
            </div>
          </div>

          {/* Price */}
          <p className="col-span-2 text-right font-semibold truncate">
            {currency.symbol} {item.current_price.toLocaleString()}
          </p>

          {/* 24h Change */}
          <p
            className={`col-span-3 text-right font-semibold truncate ${
              item.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {item.price_change_percentage_24h?.toFixed(2)}%
          </p>

          {/* Market Cap */}
          <p className="col-span-3 text-right font-semibold truncate">
            {currency.symbol} {item.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Home;
