import React from "react";
import Image from "next/image";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

function MentorDetails() {
  return (
    <div>
      {/* mentor details  */}

      <div className="flex px-[106px] border-2 border-[#E2E8F0] border-l-0 py-10 ">
        <Link
          href="/"
          className="flex justify-center items-center absolute z-50 left-50 text-[#64748B] font-medium"
        >
          <IoIosArrowRoundBack size={30} />
          Back
        </Link>
        <div className="relative flex flex-col max-w-48 min-h-48">
          <Image
            src="/mentor1.png"
            alt="User picture"
            width={200}
            height={200}
            unoptimized
            quality={100}
            className="h-full w-full rounded-lg object-cover"
          />

          <div className="absolute bottom-0 rounded-b-lg p-2 flex w-[192px] justify-center items-center space-x-1 bg-[#33415566]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/Star.png"
                alt="Star"
                width={12}
                height={12}
                unoptimized
                quality={100}
                className="w-3 h-3"
              />
            ))}
            <p className="text-white">| 3 Reviews</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 w-full">
          <div className="flex justify-between items-center">
            <div className="flex w-full justify-between items-center ">
              <div className="flex gap-2 justify-center items-center">
                <h1 className="text-xl font-medium leading-7 text-[#334155]">
                  Jonny Rose
                </h1>
                <IoShieldCheckmarkOutline
                  className="text-[#00C16A]"
                  size={16}
                />
              </div>
              <p className=" bg-[#E5E7EB] text-center p-1 rounded-xs">
                20 Sessions
              </p>
            </div>
          </div>

          <div className="flex  justify-between items-center gap-4">
            <p className="text-lg font-normal leading-7 text-[#334155]">
              Sr. Software Engineering at Google
            </p>
            <div className="flex gap-2 justify-center items-center">
              <AiOutlineLinkedin size={24} />
              <FiInstagram size={20} />
              <FaMedium size={20} />
              <BsTwitterX size={20} />
              <CiShare2 size={20} />
            </div>
          </div>
          <div className="bg-[#F1F5F9] p-5 rounded-lg min-h-24 text-sm leading-5">
            <p className="text-md leading-5 text-[#334155]">
              PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA ||
              Team Developement || Growth Management || Full Stack
              Developer(MERN) || Full Stack Developer(MERN)|| Growth Management
              || || Growth Management || Full Stack Developer
            </p>
          </div>
        </div>
      </div>
      {/* services  */}
      {/* reviews */}
    </div>
  );
}

export default MentorDetails;
