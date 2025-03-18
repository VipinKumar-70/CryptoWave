import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <section className="flex justify-center items-center flex-col gap-10 py-10 px-4 md:px-10">
      <div className="text-center space-y-4">
        <p className="lg:text-6xl md:text-5xl text-4xl font-bold font-serif leading-tight">
          Largest <br />
          Crypto Marketplace
        </p>
        <p className="text-gray-300">
          Welcome to the world's largest cryptocurrency marketplace.
          <br /> Sign up to explore more about cryptos.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          className="bg-white text-black font-semibold p-4 pr-28 w-full rounded-lg border border-gray-300 focus:outline-none"
          type="search"
          placeholder="Search crypto..."
        />
        <button className="bg-gray-700 text-white p-2 px-6 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg cursor-pointer font-semibold hover:bg-gray-600 transition">
          Search
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 py-3 px-5 w-full max-w-5xl bg-gray-700 rounded-lg font-medium text-white">
        <p className="col-span-1 text-center">#</p>
        <p className="col-span-4">Coins</p>
        <p className="col-span-2 text-right">Price</p>
        <p className="col-span-2 text-right">24H Change</p>
        <p className="col-span-3 text-right">Market Cap</p>
      </div>

      {/* Coin Rows */}
      {displayCoin.slice(0, 15).map((item, index) => (
        <div
          className="grid grid-cols-12 gap-4 items-center py-4 px-5 w-full max-w-5xl bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition text-white"
          key={index}
        >
          {/* Rank */}
          <p className="col-span-1 text-center font-medium">
            {item.market_cap_rank}
          </p>

          {/* Coin Name & Image */}
          <div className="col-span-4 flex items-center gap-2">
            <img className="w-8 h-8" src={item.image} alt={item.name} />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm uppercase text-gray-400">{item.symbol}</p>
            </div>
          </div>

          {/* Current Price */}
          <p className="col-span-2 text-right font-semibold">
            {currency.symbol} {item.current_price.toLocaleString()}
          </p>

          {/* 24H Change */}
          <p
            className={`col-span-2 text-right font-semibold ${
              item.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {item.price_change_percentage_24h
              ? item.price_change_percentage_24h.toFixed(2)
              : 0}
            %
          </p>

          {/* Market Cap */}
          <p className="col-span-3 text-right font-medium">
            {currency.symbol} {item.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Home;
