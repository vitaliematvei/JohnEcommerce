"use client";
import React from "react";
import Link from "next/link";

import AccordionFooter from "../Molecules/AccordionFooter";
import FooterPaymensIcons from "../Molecules/FooterPaymentIcons";

const accordion_1 = [
  { text: "Boutique : Lampe Solar", href: "/" },
  { text: "Ambassadeur", href: "/" },
  { text: "ecoresponsables@lampe-solar.com", href: "/" },
  { text: "Centre D'aide / FAQ", href: "/" },
  { text: "Suivi de commande", href: "/" },
  { text: "Devis Installation Panneaux photovoltaïques", href: "/" },
];

const accordion_2 = [
  { text: "Plan du site", href: "/" },
  { text: "Expédition/Livraison-Mentions légales", href: "/" },
  { text: "Conditions générales de vente", href: "/" },
  { text: "Retour et Remboursement", href: "/" },
];

const MobileFooter = () => {
  return (
    <div className="bg-[#213236] py-8 w-full mx-auto ">
      <div className="mx-auto w-2/3">
        <AccordionFooter title="Adoptez l'énergie verte" data={accordion_1} />
        <AccordionFooter title="# LAMPESOLAR" data={accordion_2} />
      </div>

      <div className="w-[98%] mx-auto text-white">
        <p className="my-8 text-xs text-center text-[#515151]">
          &copy; {new Date().getFullYear()}
          <Link href="/" className="text-white hover:text-[#F39904]">
            &nbsp; Lampe Matvei.&nbsp;
          </Link>
          Conçu par mVi Web
        </p>
        <FooterPaymensIcons />
      </div>
    </div>
  );
};

export default MobileFooter;
