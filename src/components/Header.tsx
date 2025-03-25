import Image from "next/image";
import React from "react";
import { CiBellOn } from "react-icons/ci";
import { PiCaretDownLight } from "react-icons/pi";

function Header() {
  return (
    <div className="h-16 flex justify-end items-center px-10 py-10 gap-4 ">
      <div className="w-10 h-10 bg-white rounded-sm flex justify-center items-center drop-shadow-2xl border-1 border-neutral-300">
        <CiBellOn className="text-[#94A3B8]" size={20} />
      </div>
      <div className="flex items-center bg-white rounded-sm px-2 gap-2 py-2 drop-shadow-2xl border-1 border-neutral-300 ">
        <Image
          src="/imgLogo.png"
          alt="User picture"
          width={200}
          height={200}
          unoptimized
          quality={100}
          className="w-5 h-5 rounded-full"
        />
        <p className="font-medium text-base">Jimmy</p>
        <PiCaretDownLight className="text-[#94A3B8] w-5 h-5" />
      </div>
    </div>
  );
}

export default Header;
