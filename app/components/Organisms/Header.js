import React from "react";
import MainMenu from "./MainMenu";
import SecondaryMenu from "./SecondaryMenu";

const Header = () => {
  return (
    <header>
      <MainMenu />
      <SecondaryMenu />
    </header>
  );
};

export default Header;
