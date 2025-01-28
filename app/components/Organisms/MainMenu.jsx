"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Social from "../Molecules/Social";
import Commerce from "../Molecules/Commerce";
import Logo from "../../../public/Logo.avif";
import MobileMenu from "./MobileMenu";
import SearchMobile from "../Molecules/SearchMobile";

import { menuItems } from "@/app/utils/menuItems";

const MainMenu = () => {
  return (
    <nav className="max-w-screen-2xl bg-[#213236] px-4 py-2 mx-auto flex justify-between items-center">
      <div className="hidden xl:flex">
        <Social />
      </div>

      <MobileMenu menuItems={menuItems} />
      <Link href="/" >
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={30}
          className="xl:hidden"
        />
      </Link>

      <ul className="hidden xl:flex gap-4 text-white uppercase text-xs mx-auto">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:text-[#F39904]">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <SearchMobile />
        <Commerce />
      </div>
    </nav>
  );
};

export default MainMenu;
