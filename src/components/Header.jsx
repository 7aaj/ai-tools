"use client";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "AI Assistant",
    "IDP",
    "powerpoint generator",
    "sales coach",
    "Knowledge Management",
    "Beam counter",
  ];

  return (
    <header className="flex inset-x-0 top-0 justify-between items-center px-12 py-10 bg-white shadow-lg z-[100] mb-20 max-md:p-5">
      <div>
        <svg
          width="212"
          height="39"
          viewBox="0 0 212 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
        >
          <path
            d="M72.173 16.9131H69.8867C67.9673 10.8386 62.2873 6.43464 55.5782 6.43464C52.6464 6.43464 49.9116 7.27646 47.6006 8.73022C44.5298 3.50674 38.8525 -5.34058e-05 32.3552 -5.34058e-05C24.0933 -5.34058e-05 17.1563 5.66934 15.2205 13.3298C14.4578 13.1889 13.6717 13.1145 12.8682 13.1145C5.76131 13.1145 0 18.8758 0 25.9828C0 31.7955 3.85426 36.7072 9.14639 38.3036C10.2175 38.6585 11.3625 38.8511 12.5526 38.8511H72.173C78.1525 38.8511 83 34.0038 83 28.0245V27.7397C83 21.7603 78.1525 16.9131 72.173 16.9131Z"
            fill="#275E8B"
          ></path>
          <path
            d="M21.5092 29.1837C21.5092 29.8593 21.6742 30.3345 22.0051 30.6099C22.3355 30.8856 22.7779 31.0231 23.3327 31.0231C23.887 31.0231 24.3295 30.8856 24.6604 30.6099C24.9907 30.3345 25.1561 29.8593 25.1561 29.1837V19.1066C25.1561 18.4313 24.9907 17.9561 24.6604 17.6804C24.3295 17.405 23.887 17.2672 23.3327 17.2672C22.7779 17.2672 22.3355 17.405 22.0051 17.6804C21.6742 17.9561 21.5092 18.4313 21.5092 19.1066V29.1837ZM17.9902 19.2932C17.9902 17.7828 18.4487 16.6232 19.3659 15.8142C20.2826 15.0057 21.6052 14.6013 23.3327 14.6013C25.0602 14.6013 26.3823 15.0057 27.2995 15.8142C28.2163 16.6232 28.6752 17.7828 28.6752 19.2932V28.997C28.6752 30.5078 28.2163 31.6675 27.2995 32.476C26.3823 33.2849 25.0602 33.689 23.3327 33.689C21.6052 33.689 20.2826 33.2849 19.3659 32.476C18.4487 31.6675 17.9902 30.5078 17.9902 28.997V19.2932Z"
            fill="white"
          ></path>
          <path
            d="M39.04 33.4761H35.521V14.8149H39.04V22.8125H43.0388V14.8149H46.6218V33.4761H43.0388V25.4784H39.04V33.4761Z"
            fill="white"
          ></path>
          <path
            d="M52.7319 14.8149H63.6087V17.4808H59.9298V33.4761H56.4109V17.4808H52.7319V14.8149Z"
            fill="white"
          ></path>
          <text
            fill="#265E8C"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Bebas Neue"
            fontSize="32"
            letterSpacing="0em"
          >
            <tspan x="106" y="33.4511">
              AI Tools
            </tspan>
          </text>
        </svg>
      </div>

      <nav className="flex gap-2 items-center max-md:hidden">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="px-2.5 py-3 text-base font-medium tracking-wider leading-6 uppercase cursor-pointer text-[#3c3a3b]"
          >
            {item}
          </button>
        ))}
        <button className="px-6 py-3 text-base font-semibold tracking-wider leading-6 text-white bg-[#f02432] rounded-lg cursor-pointer">
          Contact Us
        </button>
      </nav>

      {/* Mobile menu button - hidden on desktop */}
      <button
        className="hidden max-md:block text-neutral-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className="ti ti-menu-2 text-2xl"></i>
      </button>

      {/* Mobile menu - shown when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-white z-[101] p-5 flex flex-col items-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="px-2.5 py-4 text-base font-medium tracking-wider leading-6 uppercase cursor-pointer text-neutral-700 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </button>
          ))}
          <button
            className="mt-4 px-6 py-3 text-base font-semibold tracking-wider leading-6 text-white bg-red-600 rounded-lg cursor-pointer w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
