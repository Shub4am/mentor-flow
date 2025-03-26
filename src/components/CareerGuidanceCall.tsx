"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoClock } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { PiCaretDownBold } from "react-icons/pi";

function CareerGuidanceCall() {
  const [selected, setSelected] = useState<Date[] | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const defaultClassNames = getDefaultClassNames();

  const timeSlots = [
    "6:00 - 6:30PM",
    "7:00 - 7:30PM",
    "8:00 - 8:30PM",
    "9:00 - 9:30PM",
    "10:00 - 10:30PM",
    "11:00 - 11:30PM",
    "12:00 - 12:30PM",
    "1:00 - 1:30PM",
    "2:00 - 2:30PM",
    "3:00 - 3:30PM",
  ];

  return (
    <div className="w-full h-dvh px-[106px]">
      {/* mentor details  */}
      <div className="-mx-[106px]">
        <div className="w-full border-b-1 border-[#E2E8F0]"></div>
      </div>
      <div className="flex py-10 ">
        <Link
          href="/mentor-details"
          className="flex justify-center items-center absolute z-50 left-50 text-[#64748B] font-medium"
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

      {/* carreer guidance  */}
      <div className="w-full h-[344px] border border-[#CBD5E1] rounded-xl p-6 gap-4 mb-5 drop-shadow-xl bg-white ">
        <h1 className="text-xl text-[#334155] leading-7 font-medium py-2">
          Career Guidance
        </h1>
        <p className="text-[#334155] text-sm font-normal leading-5 pb-4">
          I'll give you advice to help with your career decisions. I'll give you
          advice to help with your career decisions.
        </p>
        <p className="text-sm text-[#64748B] p-2">Assist you with</p>
        <div className="bg-[#EFF6FF] rounded-sm p-4">
          <ul className="list-disc px-4 text-sm">
            <li>I can help you figure out your next steps.</li>
            <li>
              I can help you figure out your next steps. I can guide you through
              career transitions and help you explore new fields.
            </li>
            <li>
              Need advice on software engineering roles? I'll help you navigate
              your options.
            </li>
          </ul>
        </div>

        <div className="flex w-full items-center p-2 py-4 gap-4">
          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ">
            <p className="text-[#64748B] text-sm pb-2">Service type</p>
            <div className="flex gap-2 items-center">
              <BiVideo size={20} className="text-[#3B82F6]" />
              <p className="text-sm whitespace-nowrap">1:1 call</p>
            </div>
          </div>

          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2">
            <p className="text-[#64748B] text-sm pb-2">Duration</p>
            <div className="flex gap-2 items-center">
              <GoClock size={20} className="text-[#3B82F6]" />
              <p className="text-sm">30 min</p>
            </div>
          </div>

          <div className="w-[2px] h-16 bg-[#E2E8F0]"></div>

          <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ">
            <p className="text-[#64748B] text-sm pb-2">Amount</p>
            <div className="flex items-center">
              <MdCurrencyRupee size={16} className="text-[#00C16A]" />
              <p className="text-sm">300</p>
            </div>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="-mx-[106px]">
        <div className="w-full border-b-2 border-[#E2E8F0]"></div>
      </div>

      <div className="py-6">
        <h1 className="text-2xl text-[#0F172A] leading-8 font-normal pb-8">
          Slot
        </h1>
        <div className="w-full h-full rounded-xl border border-[#CBD5E1] p-6 gap-6  drop-shadow-2xl bg-white ">
          <div className="flex gap-3 py-2">
            <FaRegCalendarAlt size={20} className="text-[#3B82F6]" />
            <p>Date</p>
          </div>

          <div className="flex gap-6">
            <div className="w-[510px] h-[400px] rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] flex-1 drop-shadow-2xl">
              {/* date picker */}
              <DayPicker
                animate
                mode="multiple"
                selected={selected}
                onSelect={setSelected}
                showOutsideDays={false}
                modifiersClassNames={{
                  selected: "bg-[#334155] text-white rounded-md",
                  today: "text-[#0F172A]",
                  chevron: `${defaultClassNames.chevron} fill-[#0F172A]`,
                }}
                className="text-[#64748B] p-2  "
              />
            </div>
            {/* time picker */}
            <div className=" w-[366px] h-[400px] rounded-xl border border-[#CBD5E1] p-6 gap-6  drop-shadow-2xl bg-[#F8FAFC]  flex-1">
              <div className="flex items-center gap-2 py-2 relative -top-16 -left-5">
                <FaRegClock size={20} className="text-[#3B82F6]" />
                <p>Time</p>
              </div>
              <p className="text-[#0F172A] relative -top-11 ">25 Nov, Monday</p>
              <div className="grid grid-cols-2 gap-8 mt-4 py-5 ">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`p-2 rounded-lg text-xs font-medium relative -top-10 border border-[#E2E8F0]  ${
                      selectedTime === slot
                        ? "bg-[#64748B] text-white"
                        : "bg-[#F8FAFC] text-[#334155]"
                    }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* timezone  */}

          <div>
            <p className="text-lg text-[#0F172A] pt-6 pb-3">Timezone</p>
            <div className="flex justify-between items-center h-9 border border-[#CBD5E1] rounded-sm bg-white py-2 px-3 drop-shadow-lg cursor-pointer ">
              <p>(GMT + 5:30) Chennai, Kolkata, Mumbai, New Delhi(IST)</p>
              <PiCaretDownBold size={20} className="text-[#94A3B8]" />
            </div>
            <div className="flex justify-end py-6">
              <button className="border border-[#334155] bg-[#334155] rounded-md text-white py-2 px-4 cursor-pointer">
                Confirm details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerGuidanceCall;
