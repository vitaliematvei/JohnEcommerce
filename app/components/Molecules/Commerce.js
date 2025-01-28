"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Commerce = () => {
  const [showModal, setShowModal] = useState(false);

  const handleHover = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex gap-8 ">
      <select
        name="curency"
        defaultValue="cad"
        className="bg-transparent  uppercase text-xs text-white"
      >
        <option value="eur" className=" bg-[#7A8486] ">
          Eur
        </option>
        <option value="usd" className=" bg-[#7A8486]">
          Usd
        </option>
        <option value="cad" className=" bg-[#7A8486]">
          Cad
        </option>
        <option value="aud" className=" bg-[#7A8486]">
          Aud
        </option>
        <option value="gbp" className=" bg-[#7A8486]">
          Jbp
        </option>
        <option value="jpy" className=" bg-[#7A8486]">
          Jpy
        </option>
      </select>
      <div className="flex items-center gap-2 text-white uppercase hover:text-[#F39904]">
        <FaRegUser className="-mt-1" />
        <p className="text-xs">Connexion</p>
      </div>

      <div className="flex gap-1 items-center text-white uppercase text-md">
        <IoCartOutline
          className="hover:text-[#F39904]"
          size={18}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        />
        <p className="text-xs">0</p>
        {showModal && (
          <div
            className={`fixed top-9 py-8 px-20 right-0 
              border-2 rounded-md shadow-md bg-white 
              ${
                showModal ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out
              `}
          >
            <p className="text-black p-2 bg-[#FFF7B6] rounded-md shadow-md ">
              Votre panier est vide
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commerce;
