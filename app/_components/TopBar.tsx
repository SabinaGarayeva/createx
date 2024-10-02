"use client";

import Link from "next/link";
import USA from "../../public/usaFlag.png";
import Login from "../../public/loginIcon.svg";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className="bg-black w-100vh text-white flex mx-auto justify-between px-20">
      <p>
        Available 24/7 at <span>(405) 555-0128</span>
      </p>
      <ul className="flex gap-10">
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
      <div className="flex gap-5">
        <Image
          src={USA}
          alt="flag"
          quality={100}
          className="object-none"
          width="35"
        />
        <p>Eng / $</p>
      </div>
      <div className="flex gap-4">
        <Image src={Login} alt="login icon" />
        <button>Log in</button>
        <p>/</p>
        <button>Register</button>
      </div>
    </div>
  );
}
