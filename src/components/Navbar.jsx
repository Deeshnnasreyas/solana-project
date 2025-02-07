import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {
  menuBuildItems,
  menuCommunityItems,
  menuLearnItems,
  menuNetworkItems,
} from "../constants";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  const renderDropdown = () => {
    return (
      <>
        <Dropdown items={menuLearnItems} />
        <Dropdown items={menuBuildItems} />
        <Dropdown items={menuNetworkItems} />
        <Dropdown items={menuCommunityItems} />
      </>
    );
  };
  return (
    <div className="navbar fixed w-full z-20 h-[67px] bg-[#000000] backdrop-blur-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="container">
        <div className="flex flex-row justify-between pt-[13px] xl:pt-[20px]">
          <div className=" flex flex-row items-center cursor-pointer gap-2 text-white">
            <img
              src={logo}
              className="mx-2 w-[10rem] md:w-[4rem] lg:w-[10rem]"
              width={70}
              height={30}
              alt="Logo"
            />
          </div>

          <nav className="hidden md:flex flex-row items-center text-xl  font-lg gap-8">
            {renderDropdown()}
          </nav>

          <div className="md:hidden flex items-center text-white">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#000000] text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {renderDropdown()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
