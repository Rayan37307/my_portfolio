"use client";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div
    >
      <nav className="flex justify-between items-center px-8 py-5 shadow-lg">
        <div
        >
          <div className="flex items-center justify-between gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden "
              onClick={() => {
                const dropdown_nav = document.querySelector("#dropdown_nav");
                dropdown_nav.classList.toggle("hidden");
                dropdown_nav.classList.toggle("flex");
              }}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="font-old md:text-[25px] text-[18px]">
              Tasin.Dev
            </h1>
          </div>
        </div>
        <ul className=" gap-10 items-center ml-auto max-md:hidden">
          <Link href={"#"} onClick={() => {
            window.scrollTo(0, 0);
          }} className="px-5 text-[17px] cursor-pointer">Home</Link>
          <Link href={"#about"} className="px-5 text-[17px]">About</Link>
          <Link href={"#projects"} className="px-5 text-[17px]">Projects</Link>
          <Link href={"#Contact"} className="px-5 text-[17px]">Contact</Link>
        </ul>
      </nav>
      <ul
        id="dropdown_nav"
        className=" md:hidden gap-3 mt-2 hidden flex-col self-start"
      >
        <Link href={"#"} onClick={() => {
            window.scrollTo(0, 0);
          }} className="px-5 text-[17px] cursor-pointer">Home</Link>
          <Link href={"#about"} className="px-5 text-[17px]">About</Link>
          <Link href={"#projects"} className="px-5 text-[17px]">Projects</Link>
          <Link href={"#Contact"} className="px-5 text-[17px]">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
