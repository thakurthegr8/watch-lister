import React from 'react'
import styles from './Navbar.module.css'
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { LOGO_TEXT } from '@/src/constants';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-3 py-4">
      <div className="logo">
        <h1 className="text-xl font-black">{LOGO_TEXT}</h1>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <button className="aspect-square"><SearchIcon className="w-4 h-4" /></button>
        <button className="p-2 rounded">Login</button>
        <button className="p-2 bg-white rounded-full text-black">Sign up</button>
      </div>
    </div>
  )
}
