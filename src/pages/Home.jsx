import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center flex-col gap-10 py-10 px-10">
      <div>
        <p className="lg:text-6xl md:text-4xl text-3xl font-bold font-serif text-center md:leading-20 mb-10">
          Largest <br />
          Crypto Marketplace
        </p>
        <p className="text-center">
          Welcome to the world's largest cryptocurrency marketplace.
          <br /> Sign up to explore more about cryptos.
        </p>
      </div>
      <div className="relative w-full max-w-md">
        <input
          className="bg-white text-black font-semibold p-4 pr-28 w-full rounded-lg border border-gray-300 focus:outline-none"
          type="search"
          placeholder="Search crypto..."
        />
        <button className="bg-gray-700 text-white p-2 px-6 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg cursor-pointer font-semibold">
          Search
        </button>
      </div>
      <div className="py-2 px-5 bg-gray-700 rounded-lg">
        <ul className="flex justify-between gap-x-16 items-center">
          {["#", "Coins", "Price", "24H Change", "Market Cap"].map(
            (item, index) => (
              <li className="font-medium" key={index}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

export default Home;
