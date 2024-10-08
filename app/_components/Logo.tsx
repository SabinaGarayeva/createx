import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 z-10">
      <span className="text-3xl md:text-4xl font-extrabold text-gray-900">CREATE</span>
      <Image
        src={logo}
        // height={35} // Keep original height
        // width={35}  // Keep original width
        alt="Createx website logo"
        className="w-8 h-8 md:w-9 md:h-9" // Adjust logo size for responsiveness
        quality={100}
      />
    </Link>
  );
}
