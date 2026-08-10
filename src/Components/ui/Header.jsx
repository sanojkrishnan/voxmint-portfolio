import LogoTypeOne from "./LogoTypeOne";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-md flex p-4 py-4 z-40 items-center justify-between">
      <LogoTypeOne size={30} animate={false} color="#3D5AA8" />
      <ThemeToggle />
    </div>
  );
}

export default Header;
