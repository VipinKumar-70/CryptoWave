import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import bitcoin from "../assets/bitcoin.png";
import { NavLink } from "react-router";
function Navbar() {
  const navlinks = [
    { name: "Home", path: "/" },
    {
      name: "Features",
      path: "/features",
    },
    { name: "Pricing", path: "/Pricing" },
    { name: "Blog", path: "/Blog" },
  ];
  return (
    <>
      <header className="px-24 shadow-md font-serif border-b-2 border-gray-600">
        <nav className="flex justify-between items-center py-6">
          <div>
            <a href="/" className="text-3xl font-bold flex items-center gap-2">
              <img src={bitcoin} alt="cryptowave logo" className="w-8 h-8" />
              CrytoWave
            </a>
          </div>

          {/* Navigation links */}
          <ul className="flex gap-x-10">
            {navlinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  className="transition-all hover:text-gray-400"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
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
              <option className="text-black" value="INR">
                INR
              </option>
              <option className="text-black" value="USD">
                USD
              </option>
              <option className="text-black" value="EUR">
                EUR
              </option>
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
