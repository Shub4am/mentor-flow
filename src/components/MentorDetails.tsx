"use client";
import React from "react";
import Image from "next/image";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaMedium } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import ServicesCard from "./ServicesCard";
import Reviews from "./Reviews";
import { useSearchParams } from "next/navigation";

function MentorDetails() {
  const searchParams = useSearchParams();

  const mentorName = searchParams.get("name") || "Jonny Rose";
  const mentorImage = searchParams.get("image") || "/mentor1.png";
  const mentorRole =
    searchParams.get("role") || "Sr. Software Engineering at Google";
  const mentorBio =
    searchParams.get("bio") ||
    "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || || Growth Management || Full Stack Developer";

  return (
    <div className="w-[350px] sm:w-full h-full sm:px-[106px]">
      {/* mentor details  */}
      <div className="-mx-[296px]">
        <div className="w-full border-b border-[#E2E8F0]"></div>
      </div>
      <div className="flex flex-col sm:flex-row py-10 max-w-[320px] sm:max-w-full">
        <Link
          href="/"
          className="hidden sm:flex justify-center items-center absolute z-50 left-30 text-[#64748B] font-medium hover:text-[#0c8af9]"
        >
          <IoIosArrowRoundBack size={30} />
          Back
        </Link>
        <div className="relative flex flex-col sm:max-w-48 min-h-[100px] sm:min-h-48 w-full">
          <Image
            src={mentorImage}
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
                  {mentorName}
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

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className="text-lg font-normal leading-7 text-[#334155]">
              {mentorRole}
            </p>
            <div className="flex gap-2 justify-center items-center">
              <AiOutlineLinkedin size={24} className="cursor-pointer" />
              <FiInstagram size={20} className="cursor-pointer" />
              <FaMedium size={20} className="cursor-pointer" />
              <BsTwitterX size={20} className="cursor-pointer" />
              <CiShare2 size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="bg-[#F1F5F9] p-5 rounded-lg min-h-24 text-sm leading-5">
            <p className="text-md leading-5 text-[#334155] text-center sm:text-start">
              {mentorBio}
            </p>
          </div>
        </div>
      </div>
      {/* services  */}
      {/* separator */}
      <div className="-mx-[296px]">
        <div className="w-full border-b-1 border-[#E2E8F0]"></div>
      </div>
      <div className="py-10">
        <h1 className="text-[#0F172A] text-2xl leading-8 font-normal mb-6">
          Services
        </h1>
        <ServicesCard />
      </div>
      {/* separator */}
      <div className="-mx-[296px]">
        <div className="w-full border-b-2 border-[#E2E8F0]"></div>
      </div>
      {/* reviews */}
      <Reviews />
    </div>
  );
}

export default MentorDetails;
