import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

function Header() {
  return (
    <header>
      <TopBar />
      <Navigation />
      <BottomBar />
    </header>
  );
}

export default Header;
