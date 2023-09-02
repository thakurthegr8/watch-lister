import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon.js";
import { LOGO_TEXT } from "@/src/constants";
import Link from "next/link";

export default function Navbar() {
  const [serachQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleClick = () => {
    console.log(serachQuery);
  }
  return (
    <div className="flex justify-between items-center px-3 py-4">
      <div className="logo">
        <Link className="text-xl font-black" href={'/'}>{LOGO_TEXT}</Link>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <div className="flex items-center gap-2 mx-8">
          <input
            type="text"
            className=" w-full p-2 rounded-sm border border-gray-300 focus:border-primary focus:outline-none text-gray-700"
            placeholder="Search here"
            value={serachQuery}
            onChange={handleSearchChange}
          />
          <button className="aspect-square" onClick={handleClick}>
            <SearchIcon className="w-4 h-4" />
          </button>
        </div>
        <button className="p-2 rounded">Login</button>
        <button className="p-2 bg-white rounded-full text-black">
          Sign up
        </button>
      </div>
    </div>
  );
}
