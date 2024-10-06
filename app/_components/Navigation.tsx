"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex text-xl py-7 items-center justify-between border-b-2 border-gray-300 px-32">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-16 items-center">
          <li>
            <Link
              href="/women"
              className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
                pathname === "/women" ? "text-[#17696A]" : ""
              }`}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/men"
              className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
                pathname === "/men" ? "text-[#17696A]" : ""
              }`}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/boys"
              className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
                pathname === "/boys" ? "text-[#17696A]" : ""
              }`}
            >
              Boys
            </Link>
          </li>
          <li>
            <Link
              href="/girls"
              className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
                pathname === "/girls" ? "text-[#17696A]" : ""
              }`}
            >
              Girls
            </Link>
          </li>
          <li>
            <Link
              href="/sale"
              className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
                pathname === "/sale" ? "text-[#17696A]" : "text-red-600"
              }`}
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
        <input
          type="search"
          placeholder="Search for products..."
          className="w-full py-2 px-4  placeholder-gray-400 focus:outline-none"
        />
        <div className="px-3 text-gray-400">
          <Image
            src="/searchIcon.svg"
            width="25"
            height="25"
            alt="search input icon"
          />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex items-center gap-1 text-white">
          <Image
            src="/wishlistIcon.svg"
            width="25"
            height="25"
            alt="wishlist icon"
          />
          <span className="text-gray-800">4</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <Image
            src="/basket.svg"
            width="25"
            height="25"
            quality={100}
            alt="basket icon"
          />
          <span className="bg-teal-500 px-1 rounded-md">4</span>
        </div>
      </div>
    </nav>
  );
}
