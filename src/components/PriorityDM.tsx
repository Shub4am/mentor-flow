"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import {
  MdCurrencyRupee,
  MdOutlineEmojiEmotions,
  MdOutlineFormatListNumbered,
  MdOutlineMessage,
} from "react-icons/md";
import { PiCaretDownBold, PiQuotesBold } from "react-icons/pi";
import { FaList } from "react-icons/fa";
import { AiOutlineLink, AiOutlinePicture } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";

function PriorityDM() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsBtnDisabled(e.target.value.trim().length === 0);
  };

  return (
    <div className="w-full h-dvh px-[106px]">
      {/* mentor details  */}
      <div className="-mx-[186px]">
        <div className="w-full border-b border-[#E2E8F0]"></div>
      </div>
      <div className="flex py-10 ">
        <Link
          href="/mentor-details"
          className="flex justify-center items-center absolute z-50 left-30 text-[#64748B] font-medium"
        >
          <IoIosArrowRoundBack size={30} />
          Back
        </Link>
        <div className="flex w-full justify-between items-center ">
          <div className="flex gap-2 justify-center items-center">
            <h1 className="text-xl font-medium leading-7 text-[#334155]">
              Jonny Rose
            </h1>
            <IoShieldCheckmarkOutline className="text-[#00C16A]" size={16} />
          </div>
        </div>
      </div>
      <div className="w-full h-[344px] border border-[#CBD5E1] rounded-xl p-6 gap-4 mb-10 drop-shadow-xl bg-white ">
        <h1 className="text-xl text-[#334155] leading-7 font-medium py-2">
          Resume Review
        </h1>
        <p className="text-[#334155] text-sm font-normal leading-5 pb-4">
          I&apos;ll refine your resume to land better opportunities.
        </p>
        <p className="text-sm text-[#64748B] p-2">Assist you with</p>
        <div className="bg-[#EFF6FF] rounded-sm p-4">
          <ul className="list-disc px-4 text-sm">
            <li>I will identify the mistakes in your copy.</li>
            <li>
              I will refine and improve your copy for better clarity and impact
            </li>
          </ul>
        </div>

        <div className="flex w-full items-center p-2 py-4 gap-4">
          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ">
            <p className="text-[#64748B] text-sm pb-2">Service type</p>
            <div className="flex gap-2 items-center">
              <MdOutlineMessage size={20} className="text-[#3B82F6]" />
              <p className="text-sm whitespace-nowrap">Priority DM</p>
            </div>
          </div>

          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2">
            <p className="text-[#64748B] text-sm pb-2">Replies</p>
            <div className="flex gap-2 items-center">
              <GoClock size={20} className="text-[#3B82F6]" />
              <p className="text-sm">in 1 day</p>
            </div>
          </div>

          <div className="w-[2px] h-16 bg-[#E2E8F0]"></div>

          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ">
            <p className="text-[#64748B] text-sm pb-2">Amount</p>
            <div className="flex items-center">
              <MdCurrencyRupee size={16} className="text-[#00C16A]" />
              <p className="text-sm">100</p>
            </div>
          </div>
        </div>
      </div>
      {/* separator */}
      <div className="-mx-[186px]">
        <div className="w-full border-b-2 border-[#E2E8F0]"></div>
      </div>
      <div>
        <p className="text-2xl leading-8 text-[#0F172A] py-8">Your question</p>
      </div>
      {/* rt editor */}
      <div className="flex justify-around items-center bg-white w-full h-11 border rounded-t-md border-[#CBD5E1]">
        <div className="flex items-center gap-8">
          <button className="text-[#64748B] font-semibold">Heading 1</button>
          <PiCaretDownBold size={20} className="text-[#64748B]" />
        </div>
        <button className="text-[#64748B] font-semibold cursor-pointer">
          B
        </button>
        <button className="text-[#64748B] font-semibold cursor-pointer">
          I
        </button>
        <button className="text-[#64748B] font-semibold cursor-pointer">
          U
        </button>
        <button className="text-[#64748B] font-semibold cursor-pointer">
          S
        </button>
        <button>
          <PiQuotesBold size={20} className="text-[#64748B] cursor-pointer" />
        </button>
        <button>
          <FaList size={20} className="text-[#64748B]" />
        </button>
        <button>
          <MdOutlineFormatListNumbered
            size={20}
            className="text-[#64748B] cursor-pointer"
          />
        </button>
        <button>
          <AiOutlineLink size={20} className="text-[#64748B] cursor-pointer" />
        </button>
        <button>
          <AiOutlinePicture
            size={20}
            className="text-[#64748B] cursor-pointer"
          />
        </button>
        <button>
          <TbMovie size={20} className="text-[#64748B] cursor-pointer" />
        </button>
        <button>
          <MdOutlineEmojiEmotions
            size={20}
            className="text-[#64748B] cursor-pointer"
          />
        </button>
      </div>
      <textarea
        name="questions"
        id="questions"
        placeholder="Ask your question"
        className="h-64 w-full p-2 border border-[#CBD5E1] mb-5 bg-[#F8FAFC] rounded-b-md focus:outline-none"
        onChange={handleTextChange}
      />
      <div className="flex justify-end py-6">
        <button
          disabled={isBtnDisabled}
          className={`rounded-md text-white py-2 px-4 ${
            isBtnDisabled
              ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
              : "bg-[#334155] text-white cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PriorityDM;
