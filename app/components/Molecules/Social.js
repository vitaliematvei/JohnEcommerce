import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-4 ">
      <a href="https://twitter.com/" target="_blank">
        <FaTwitter size={16} className="text-white hover:text-[#F39904]" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebook size={16} className="text-white hover:text-[#F39904]" />
      </a>

      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram size={16} className="text-white hover:text-[#F39904]" />
      </a>

      <a href="mailto:youremail@example.com" aria-label="Email" target="_blank">
        <FaRegEnvelope size={16} className="text-white hover:text-[#F39904]" />
      </a>
    </div>
  );
};

export default Social;
