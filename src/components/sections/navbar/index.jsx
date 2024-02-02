import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { LOGO_TEXT } from "@/src/constants";
import Link from "next/link";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleClick = () => {
    console.log(searchQuery);
    setShowComponent(true);
  };
  return (
    <div className="flex justify-between items-center px-3 py-4 bg-slate-800 mb-4 ">
      <div className="logo">
        <Link className="text-xl font-black" href={"/"}>
          {LOGO_TEXT}
        </Link>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <div className="flex items-center gap-2 mx-8">
          <input
            type="text"
            className=" w-full p-2 rounded-sm border border-gray-300 focus:border-primary focus:outline-none text-gray-700"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link href={`/search/${searchQuery}`}>
            <button className="aspect-square">
              <SearchIcon className="w-4 h-4" />
            </button>
          </Link>
        </div>
        <Link href={'/login'}><button className="p-2 rounded-md hover:bg-slate-700">Login</button></Link>
        <Link href={'/register'}><button className="p-2 bg-white hover:bg-white/95 rounded-md text-gray-800 hover:text-black">
          Sign up
        </button></Link>
      </div>
    </div>
  );
}
