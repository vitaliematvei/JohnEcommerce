import React from "react";

import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

const FooterPaymensIcons = () => {
  return (
    <div className="flex justify-center space-x-8">
      <FaCcVisa size={38} />
      <FaCcMastercard size={38} />
      <FaCcPaypal size={38} />
    </div>
  );
};

export default FooterPaymensIcons;
