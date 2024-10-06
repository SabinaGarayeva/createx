import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 z-10">
      <span className="text-4xl font-extrabold text-gray-900">CREATE</span>
      <Image
        src={logo}
        height="35"
        width="35"
        alt="GreenShop website logo"
        quality={100}
      />
    </Link>
  );
}
