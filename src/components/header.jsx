import { useState } from "react";
import { logoIcon, menuIcon, userIcon } from "../assets";
import { NAV_ITEMS } from "../constants/appConstant";
import useScreenResizeHandler from "../helper/screenResizer";
import { motion } from "framer-motion";

const NavStyle = () => {
  return (
    <>
      {NAV_ITEMS.map((item, i) => {
        return (
          <li className="capitalize" key={i}>
            <a href={item.link}> {item.title}</a>
          </li>
        );
      })}
    </>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);
  useScreenResizeHandler(setActive);

  const toggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <header className="max-w-screen-2xl mx-auto md:px-20 md:py-6 py-4 px-5 flex justify-between items-center">
      <div className="flex items-center gap-[74px]">
        <img
          className="md:size-[35px] size-10"
          src={logoIcon}
        />

        <ul
          className={`duration-75 trasition font-inter text-[#36485C] lg:text-base text-xl font-medium lg:flex gap-[52px] lg:static absolute md:right-20 right-5 top-20 pr-20 bg-white py-40 px-20 lg:p-0 lg:top-0 backdrop-blur-lg bg-opacity-10 shadow lg:shadow-none ${
            active ? "block" : "hidden"
          }`}
        >
          <NavStyle />
        </ul>
      </div>
      <div className="flex gap-[56px] items-center">
        <a
          className="font-inter text-[#36485C] text-base font-medium lg:block hidden"
          ahref="/#"
        >
          Open an Account
        </a>
        <div className="flex lg:gap-[12px] items-center gap-5">
          <img
            className="md:size-[26px] size-8"
            src={userIcon}
          />
          <a
            ahref="/#"
            className="font-inter text-[#36485C] text-base font-medium lg:block hidden"
          >
            Sign In
          </a>
          <button className="lg:hidden">
            <img src={menuIcon} onClick={toggle} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
