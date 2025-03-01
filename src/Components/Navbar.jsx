import React from "react";

function Navbar() {
  return (
    <>
      <header>
        <nav className="flex justify-between">
          <div>
            <a href="/">
              CrytoWave
              <img src="" alt="" />
            </a>
          </div>
          <ul className="flex gap-x-10">
            {["Home", "Features", "Pricing", "Blog"].map((item, index) => (
              <a href="">
                <li key={index}>{item}</li>
              </a>
            ))}
          </ul>
          <div>
            <select name="" id="">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <button>Signup</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
