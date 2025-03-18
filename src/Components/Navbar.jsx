import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import bitcoin from "../assets/bitcoin.png";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className="lg:px-24 px-5 shadow-md font-serif border-b-2 border-gray-600">
        <nav className="flex justify-between items-center py-6">
          <div>
            <a
              href="/"
              className="md:text-3xl text-xl font-bold flex items-center gap-2"
            >
              <img src={bitcoin} alt="cryptowave logo" className="w-8 h-8" />
              CrytoWave
            </a>
          </div>

          {/* Navigation links */}
          <ul className="hidden lg:flex gap-x-10">
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
          <div className="flex items-center gap-x-1">
            <select
              name="currency"
              id="currency"
              className="border-2 md:p-1 p-0.5 rounded"
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

            <button className=" hidden lg:flex items-center gap-2 bg-white text-black text-[14px] text-center md:px-6 p-2 rounded-full font-medium">
              Sign up <GoArrowUpRight className="text-lg font-bold" />
            </button>

            {/* Hamburger Menu for mobile */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <RiCloseLargeFill className="text-2xl" />
                ) : (
                  <TfiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
