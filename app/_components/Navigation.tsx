import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex text-xl gap-20">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/plantcare">Plant Care</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <img src="/searchIcon.svg" alt="search input icon" />
        <img src="/basket.svg" alt="basket icon" />
        <div className="bg-green text-white flex gap-1">
          <img src="/loginIcon.svg" alt="login icon" />
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
