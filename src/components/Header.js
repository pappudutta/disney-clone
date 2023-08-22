import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import avataar from "../assets/Images/avataar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-5">
        <img
          src={logo}
          alt="Disney Logo"
          className="w-[150px] lg:w-[180px] object-cover "
        />
        {/* for large device */}
        <div className="hidden md:flex gap-3">
          {menu.map(item => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* for medium device */}
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
        </div>
        <div onClick={() => setToggle(!toggle)} className="md:hidden">
          <HeaderItem name="" Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 px-5 py-1 bg-[#121212] border border-gray-500">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          )}
        </div>
      </div>
      <img src={avataar} alt="avataar" className="w-[30px]" />
    </div>
  );
}

export default Header;
