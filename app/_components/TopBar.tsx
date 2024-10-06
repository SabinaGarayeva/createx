"use client";

import Link from "next/link";
import USA from "../../public/usaFlag.png";
import Login from "../../public/loginIcon.svg";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className="text-gray-400 bg-gray-900 px-5 py-2 md:px-16 lg:px-16 xl:px-32 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Left side: Phone number */}
      <div className="text-center md:text-left">
        <p className="text-sm md:text-xs lg:text-xs xl:text-sm">
          Available 24/7 at <span>(405) 555-0128</span>
        </p>
      </div>

      {/* Middle: Navigation links */}
      <ul className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-6 xl:gap-10 text-sm md:text-xs lg:text-xs xl:text-sm">
        <li>
          <Link href="/">Delivery & returns</Link>
        </li>
        <li>
          <Link href="/">Track order</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Contacts</Link>
        </li>
      </ul>

      {/* Language and currency section */}
      <div className="flex gap-5 items-center">
        <Image
          src={USA}
          alt="flag"
          quality={100}
          className="object-none"
          width="25"
          height="25"
        />
        <p className="text-sm md:text-xs lg:text-xs xl:text-sm">Eng / $</p>
      </div>

      {/* Login section */}
      <div className="flex items-center gap-4">
        <Image src={Login} alt="login icon" width="20" height="20" />
        <Link href="/login" className="text-sm md:text-xs lg:text-xs xl:text-sm">
          Log in
        </Link>
        <span>/</span>
        <Link href="/register" className="text-sm md:text-xs lg:text-xs xl:text-sm">
          Register
        </Link>
      </div>
    </div>
  );
}
