import MenuListButton from "./MenuListButton";
// import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="fixed top-0 lg:right-[10%] right-[2%] w-fit backdrop-blur-md flex p-4 py-4 z-40 items-center justify-between">
      {/* <ThemeToggle /> */}
      
      <MenuListButton />
    </div>
  );
}

export default Header;
