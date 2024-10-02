import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import TopBar from "./TopBar";

function Header() {
  return (
    <header>
      <TopBar />
      <Navigation />
    </header>
  );
}

export default Header;
