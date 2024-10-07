import React from "react";
import Logo from "./Logo";
import NavbarMobile from "./NavbarMobile";


const Header = () => {





  return (
    <div className="bg-yellow-200 py-2 px-6 w-full flex flex-row items-center justify-between">
      <Logo />
      <NavbarMobile />

    </div>
  );
};

export default Header;
