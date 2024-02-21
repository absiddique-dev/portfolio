import React from "react";
import Link from "next/link";
import clsx from "clsx";
const NavbarItems = () => {
  const navItems = [
    {
      title: "HOME",
      url: "#",
    },
    {
      title: "ABOUT",
      url: "#",
    },
    {
      title: "WORK",
      url: "#",
    },
    {
      title: "SERVICES",
      url: "#",
    },
    {
      title: "REACT EXPERT",
      url: "#",
    }
  ];
  return (
    <div className="w-full h-[300px] flex justify-center items-center sticky top-[-10px] ">
      <div className="w-[70%] h-[65px] rounded-full flex gap-9 items-center justify-center border border-[#ffffff62] backdrop-blur-2xl bg-transparent  z-[99]">
        {navItems.map((item, index) => (
          <Link
            href="#"
            key={index}
            className={clsx(
              "border-r px-5 pr-11 text-white text-sm  hover:text-[#15A984] transition-all duration-300 ease-in-out",
              index == navItems.length - 1 && "border-none",
              index == 0 && "text-[#15A984]"
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarItems;
