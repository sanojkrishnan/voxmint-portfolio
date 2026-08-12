import { useState } from "react";

function MenuListButton() {
  const [menuClick, setMenuClick] = useState(window.innerWidth <= 1280);
  return (
    <div
      onClick={() => setMenuClick((prev) => !prev)}
      className={`m-6 lg:hidden flex flex-col justify-center items-center transition-all duration-500 absolute right-0 top-0 mt-5 w-5 bg-transparent cursor-pointer`}
    >
      <div
        className={`${menuClick ? "w-5" : "w-1"} transition-all duration-300 h-1 rounded-full mb-1 bg-white`}
      ></div>
      <div
        className={`${menuClick ? "w-5" : "w-1"} transition-all duration-500 h-1 rounded-full mb-1 bg-white`}
      ></div>
      <div
        className={`${menuClick ? "w-5" : "w-1"} transition-all duration-700 h-1 rounded-full mb-1 bg-white`}
      ></div>
    </div>
  );
}

export default MenuListButton;
