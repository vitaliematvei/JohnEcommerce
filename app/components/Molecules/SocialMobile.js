import React from "react";
import { FaTwitter, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const SocialMobile = () => {
  return (
    <div className="flex gap-4 justify-around bg-white px-1 py-4">
      <a href="https://twitter.com/" target="_blank">
        <FaTwitter
          size={44}
          className="bg-[#1DA1F2] text-white rounded-full p-2 "
        />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebook size={44} color="#405D9B" />
      </a>

      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram
          size={44}
          className=" bg-[#D73F94] text-white rounded-full p-2"
        />
      </a>

      <a href="mailto:youremail@example.com" aria-label="Email" target="_blank">
        <FaRegEnvelope
          size={44}
          className="bg-[#004D9A] text-white rounded-full p-2"
        />
      </a>
    </div>
  );
};

export default SocialMobile;
