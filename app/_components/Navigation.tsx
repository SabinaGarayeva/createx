"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

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
            <Link
              href="/women"
              className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/women" ? "text-red-600" : ""
              }`}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/men"
              className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/men" ? "text-red-600" : ""
              }`}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/boys"
              className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/boys" ? "text-red-600" : ""
              }`}
            >
              Boys
            </Link>
          </li>
          <li>
            <Link
              href="/girls"
              className={`transition-colors ${
                pathname === "/girls" ? "text-red-600" : ""
              }`}
            >
              Girls
            </Link>
          </li>
          <li>
            <Link
              href="/sale"
              className={`hover:text-accent-400 transition-colors pb-8 ${
                pathname === "/sale" ? "text-red-600" : ""
              }`}
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-10">
        <form className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for products..."
              required
            />
          </div>
        </form>
        <div className="flex items-center gap-1 text-white">
          <img src="/basket.svg" alt="basket icon" />
          <span className="bg-teal-500 px-1 rounded-md">4</span>
        </div>
      </div>
    </nav>
  );
}
