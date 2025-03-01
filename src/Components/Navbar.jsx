import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import bitcoin from "../assets/bitcoin.png";
function Navbar() {
  return (
    <>
      <header className="px-24 shadow-md font-serif">
        <nav className="flex justify-between items-center py-6">
          <div>
            <a href="/" className="text-3xl font-bold flex items-center gap-2">
              <img src={bitcoin} alt="cryptowave logo" className="w-8 h-8" />
              CrytoWave
            </a>
          </div>

          {/* Navigation links */}
          <ul className="flex gap-x-10">
            {["Home", "Features", "Pricing", "Blog"].map((item, index) => (
              <li key={index}>
                <a className="transition-all hover:text-gray-400" href="">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Currency Selector & Signup Button */}
          <div className="flex items-center gap-x-2">
            <select
              name="currency"
              id="currency"
              className="border-2 p-1 rounded"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            <button className="flex items-center gap-2 bg-white text-black text-[14px] text-center px-6 py-2 rounded-full font-medium">
              Sign up <GoArrowUpRight className="text-lg font-bold" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
