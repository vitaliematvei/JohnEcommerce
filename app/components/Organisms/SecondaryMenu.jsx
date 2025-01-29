"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BsChevronDown } from "react-icons/bs";
import Logo from "../../../public/Logo.avif";

import { secondaryMenuItems } from "@/app/utils/secondaryMenuItems";
import Search from "../Molecules/Search";


const SecondaryMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index == activeIndex ? null : index);
  };

  return (
    <nav className="hidden md:flex justify-between items-center bg-[#37464A] px-4 py-2 mx-auto z-50">
      <div><Link href="/" >
        <Image
          src={Logo}
          alt="Logo"
          width={205}
        />
      </Link>
      </div>

      <ul
        className="flex  gap-3 text-white text-xs">
        {secondaryMenuItems.map((item, index) => (
          <li key={index} className="px-2"
            onPointerEnter={() => handleItemClick(index)}
            onPointerLeave={() => handleItemClick(index)}

          >
            <div className="h-5 flex gap-1 uppercase hover:text-[#F39904] hover:border-b border-[#F39904]">{item.label}
              <BsChevronDown />
            </div>

            <div className="fixed left-0 w-full opacity-95 ">
              {item.subMenuItems && (
                <ul

                  className={`mt-14 flex justify-around bg-[#37464A] shadow-md ${activeIndex === index ? "block" : "hidden"
                    }`}
                >
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 max-w-72">
                      <Link href={subItem.href}>
                        <div className="border-b h-5  hover:text-[#F39904] hover:border-[#F39904]">{subItem.label}</div>
                        {subItem.subMenuItemsExpanded && (
                          <ul className="pl-4 mt-2">
                            {subItem.subMenuItemsExpanded.map(
                              (subSubItem, subSubIndex) => (
                                <li key={subSubIndex} className="py-4 hover:text-[#F39904]">
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

      < div className="-mt-2"> <Search /></div >
    </nav >
  );
};

export default SecondaryMenu;
