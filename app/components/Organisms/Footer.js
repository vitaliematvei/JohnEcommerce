import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/Logo.avif";
import FooterPaymensIcons from "../Molecules/FooterPaymentIcons";

const Footer = () => {
  return (
    <div>
      <div className="hidden xl:block bg-[#213236] text-white py-8 fixed bottom-0 left-0 w-full mx-auto ">
        <div className="flex justify-evenly items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={350} height={150} />
            </Link>
          </div>

          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-[#3D9D2B] uppercase">
                Adoptez l&apos;énergie verte
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Boutique : Lampe Solar</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Ambassadeur</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">ecoresponsables@lampe-solar.com</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Centre D&apos;aide / FAQ</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Suivi de commande</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">
                  Devis Installation Panneaux photovoltaïques
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-[#3D9D2B] uppercase">#LAMPESOLAR</li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Blog : Lampe Solaire</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Plan du site</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Expédition/Livraison</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Mentions légales</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Conditions générales de vente</Link>
              </li>
              <li className="text-sm hover:text-[#F39904]">
                <Link href="/">Retour et Remboursement</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center w-[98%] mx-auto">
          <p className="text-sm text-[#515151]">
            &copy; {new Date().getFullYear()}
            <Link href="/" className="text-white hover:text-[#F39904]">
              &nbsp; Lampe Matvei.&nbsp;
            </Link>
            Conçu par mVi Web
          </p>
          <FooterPaymensIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
