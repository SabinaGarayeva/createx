"use client"

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from 'next/navigation'


export default function Navigation() {

  const pathname = usePathname();



  return (
    <nav className="flex text-xl py-7 items-center justify-between max-w-7xl mx-auto border-b-2 border-gray-300">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-16 items-center">
          <li>
            <Link href="/"  className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/" ? "border-b-4 border-green" : ""
              }`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/shop" ? "border-b-4 border-green" : ""
              }`}>Shop</Link>
          </li>
          <li>
            <Link href="/plantcare" className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/plantcare" ? "border-b-4 border-green" : ""
              }`}>Plant Care</Link>
          </li>
          <li>
            <Link href="/blogs" className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/blogs" ? "border-b-4 border-green" : ""
              }`}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-10">
        <img src="/searchIcon.svg" alt="search input icon" />
        <img src="/basket.svg" alt="basket icon" />

        <button className="bg-green text-white flex justify-center items-center px-3 py-1 gap-1 rounded">
          <img src="/loginIcon.svg" alt="login icon" />
          Login
        </button>
      </div>
    </nav>
  );
}
