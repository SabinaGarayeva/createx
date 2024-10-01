import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 z-10">
      <Image
        src={logo}
        height="35"
        width="35"
        alt="GreenShop website logo"
        quality={100}
      />
      <span className="text-xl font-semibold text-green">GREENSHOP</span>
    </Link>
  );
}
