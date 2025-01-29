import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { IoIosMenu, IoMdClose } from "react-icons/io";

import SocialMobile from "../Molecules/SocialMobile";
import { secondaryMenuItems } from "@/app/utils/secondaryMenuItems";

import Lampes from '../../../public/MobileMenuImages/Lampes.webp';
import Decorations from '../../../public/MobileMenuImages/Decorations.webp'
import Lampadaires from '../../../public/MobileMenuImages/Lampadaires.webp';
import Guirlandes from '../../../public/MobileMenuImages/Guirlandes.jpg';
import Lanternes from '../../../public/MobileMenuImages/Lanternes.webp';
import Arrivage from '../../../public/MobileMenuImages/Arrivage.jpg';

import { FaAngleRight } from "react-icons/fa6";
import MobileFooter from "./MobileFooter";
const mobileMenuImages = [
  {
    nr: "1",
    href: "/",
    img: Lampes
  },
  {
    nr: "2",
    href: "/",
    img: Decorations
  },
  {
    nr: "3",
    href: "/",
    img: Lampadaires
  },
  {
    nr: "4",
    href: "/",
    img: Guirlandes
  },
  {
    nr: "5",
    href: "/",
    img: Lanternes
  },
  {
    nr: "6",
    href: "/",
    img: Arrivage
  },
];

const MobileMenu = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index == activeIndex ? null : index);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="md:hidden" onClick={toogleMenu}>
        <IoIosMenu size={26} className="text-white" />
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden z-50 overflow-y-auto fixed bg-white w-1/2 h-full left-0 top-0 transition-all duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex p-3 border-b-2"><IoMdClose size={26} onClick={toogleMenu} className="text-black" />
            <p className="uppercase mx-auto font-semibold">Menu</p>
          </div>

          {/* IMAGES */}
          <ul className={isMenuOpen ? "flex my-6 flex-col gap-4" : "hidden"}>
            {mobileMenuImages.map((item) => (
              <li key={item.nr} className=" pr-4">
                <Link href={item.href} >
                  <Image src={item.img} alt="Menu Item Image" width={720} height={140} className="hover:opacity-50" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Secondary Menu */}
          <ul className={isMenuOpen ? "flex flex-col gap-4 mb-12" : "hidden"}>
            {secondaryMenuItems.map((item, index) => (
              <li key={item.label} className="mx-auto w-11/12"
                onClick={() => handleItemClick(index)}
              >
                <Link href={item.href} className="flex  uppercase hover:text-[#F39904]">
                  <div className="w-[90%] text-center ">{item.label}</div>
                  <div className="w-[10%] text-right" ><FaAngleRight /></div>
                </Link>

                {/* Secondary menu Sub Items */}
                <div className="fixed top-0 left-0 w-full ">
                  {item.subMenuItems && (
                    <ul

                      className={`mt-14 bg-white  z-10 ${activeIndex === index ? "block" : "hidden"
                        }`}
                    >
                      {item.subMenuItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-2">
                          <Link href={subItem.href}>
                            <div className="h-fit z-50 pb-1 hover:text-[#F39904] border-b-2 border-black text-lg font-bold  hover:border-[#F39904]">{subItem.label}</div>
                            {subItem.subMenuItemsExpanded && (
                              <ul className="pl-4 mt-2">
                                {subItem.subMenuItemsExpanded.map(
                                  (subSubItem, subSubIndex) => (
                                    <li key={subSubIndex} className="py-1 hover:text-[#F39904]">
                                      <Link href={subSubItem.href}>
                                        {subSubItem.label}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Main Menu */}
          <ul className={isMenuOpen ? "flex flex-col gap-4" : "hidden"}>
            {menuItems.map((item) => (
              <li key={item.label} className="text-center">
                <Link href={item.href} className="uppercase hover:text-[#F39904]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" bg-[#EEEEEE] my-6 py-10"><SocialMobile /></div>
          <MobileFooter />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
