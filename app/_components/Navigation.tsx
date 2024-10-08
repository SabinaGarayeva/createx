// "use client";

// import Link from "next/link";
// import Logo from "./Logo";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export default function Navigation() {
//   const pathname = usePathname();

//   return (
//     <nav className="flex text-xl py-7 items-center justify-between border-b-2 border-gray-300 px-32">
//       <div>
//         <Logo />
//       </div>
//       <div>
//         <ul className="flex gap-16 items-center">
//           <li>
//             <Link
//               href="/women"
//               className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
//                 pathname === "/women" ? "text-[#17696A]" : ""
//               }`}
//             >
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/men"
//               className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
//                 pathname === "/men" ? "text-[#17696A]" : ""
//               }`}
//             >
//               Men
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/boys"
//               className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
//                 pathname === "/boys" ? "text-[#17696A]" : ""
//               }`}
//             >
//               Boys
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/girls"
//               className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
//                 pathname === "/girls" ? "text-[#17696A]" : ""
//               }`}
//             >
//               Girls
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/sale"
//               className={`hover:text-accent-400 transition-colors pb-8 font-bold ${
//                 pathname === "/sale" ? "text-[#17696A]" : "text-red-600"
//               }`}
//             >
//               Sale
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
//         <input
//           type="search"
//           placeholder="Search for products..."
//           className="w-full py-2 px-4  placeholder-gray-400 focus:outline-none"
//         />
//         <div className="px-3 text-gray-400">
//           <Image
//             src="/searchIcon.svg"
//             width="25"
//             height="25"
//             alt="search input icon"
//           />
//         </div>
//       </div>

//       <div className="flex gap-10">
//         <div className="flex items-center gap-1 text-white">
//           <Image
//             src="/wishlistIcon.svg"
//             width="25"
//             height="25"
//             alt="wishlist icon"
//           />
//           <span className="text-gray-800">4</span>
//         </div>
//         <div className="flex items-center gap-1 text-white">
//           <Image
//             src="/basket.svg"
//             width="25"
//             height="25"
//             quality={100}
//             alt="basket icon"
//           />
//           <span className="bg-teal-500 px-1 rounded-md">4</span>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the burger menu

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-300 px-8 py-5 lg:px-32 lg:py-7">
      {/* Logo */}
      <div className="lg:flex-shrink-0">
        <Logo />
      </div>

      {/* Desktop navigation */}
      <ul className="hidden lg:flex gap-10 items-center">
        <li>
          <Link
            href="/women"
            className={`hover:text-accent-400 transition-colors font-bold ${
              pathname === "/women" ? "text-[#17696A]" : ""
            }`}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            href="/men"
            className={`hover:text-accent-400 transition-colors font-bold ${
              pathname === "/men" ? "text-[#17696A]" : ""
            }`}
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            href="/boys"
            className={`hover:text-accent-400 transition-colors font-bold ${
              pathname === "/boys" ? "text-[#17696A]" : ""
            }`}
          >
            Boys
          </Link>
        </li>
        <li>
          <Link
            href="/girls"
            className={`hover:text-accent-400 transition-colors font-bold ${
              pathname === "/girls" ? "text-[#17696A]" : ""
            }`}
          >
            Girls
          </Link>
        </li>
        <li>
          <Link
            href="/sale"
            className={`hover:text-accent-400 transition-colors font-bold ${
              pathname === "/sale" ? "text-[#17696A]" : "text-red-600"
            }`}
          >
            Sale
          </Link>
        </li>
      </ul>

      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
        <input
          type="search"
          placeholder="Search for products..."
          className="w-full py-2 px-4 placeholder-gray-400 focus:outline-none text-sm lg:text-base"
        />
        <div className="px-3 text-gray-400">
          <Image
            src="/searchIcon.svg"
            width={20}
            height={20}
            alt="search input icon"
          />
        </div>
      </div>

      {/* Wishlist & Basket */}
      <div className="flex gap-5 lg:gap-10 items-center">
        <div className="flex items-center gap-1 text-white">
          <Image
            src="/wishlistIcon.svg"
            width={20}
            height={20}
            alt="wishlist icon"
          />
          <span className="text-gray-800 text-sm lg:text-base">4</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <Image
            src="/basket.svg"
            width={20}
            height={20}
            quality={100}
            alt="basket icon"
          />
          <span className="bg-teal-500 px-1 rounded-md text-sm lg:text-base">4</span>
        </div>
      </div>

      {/* Mobile menu icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile sidebar navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-8 lg:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
            <FiX />
          </button>
          <ul className="flex flex-col items-start gap-6">
            <li>
              <Link href="/women" onClick={toggleMenu}>
                Women
              </Link>
            </li>
            <li>
              <Link href="/men" onClick={toggleMenu}>
                Men
              </Link>
            </li>
            <li>
              <Link href="/boys" onClick={toggleMenu}>
                Boys
              </Link>
            </li>
            <li>
              <Link href="/girls" onClick={toggleMenu}>
                Girls
              </Link>
            </li>
            <li>
              <Link href="/sale" onClick={toggleMenu}>
                Sale
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
