import LogoTypeOne from "./LogoTypeOne";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="bg-gray-100 dark:bg-black flex p-4 py-0 items-center justify-between">
      <LogoTypeOne size={30} animate={false} color="#3D5AA8" />
      <ThemeToggle />
    </div>
  );
}

export default Header;
