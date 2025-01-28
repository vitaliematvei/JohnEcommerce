import React, { useState } from "react";
import Link from "next/link";

const AccordionFooter = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pb-4">
      <button onClick={toggle} className="flex gap-4 text-[#3D9D2B] ">
        <p>{title}</p>
        <svg
          className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-2 text-white">
          <ul className="flex flex-col gap-3">
            {data.map((link, index) => (
              <li key={index} className="text-xs hover:text-[#F39904]">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default AccordionFooter;
