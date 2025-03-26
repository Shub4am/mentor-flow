"use client";
import React, { useState } from "react";
import { BiVideo } from "react-icons/bi";
import { GoClock, GoPackage } from "react-icons/go";
import {
  MdCurrencyRupee,
  MdOutlineDesktopWindows,
  MdOutlineMessage,
} from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import Tabs from "./Tabs";
import Image from "next/image";
import Link from "next/link";

const SERVICE_ROUTES = {
  "1:1 call": "/mentor-details/call",
  "Priority DM": "/mentor-details/dm",
} as const;

const tabs = [
  { label: "All" },
  { label: "1:1 Call" },
  { label: "Priority DM" },
  { label: "Package" },
  { label: "Webinar" },
  { label: "Digital product" },
];

function ServicesCard() {
  const [activeTab, setActiveTab] = useState("All");
  const [isServicesDisabled, setIsServicesDisabled] = useState(false);

  const services = [
    {
      heading: "Career Guidance",
      subheading:
        "I'll give you advice to help with your career decisions. I'll give\n you advice to help with your career decisions.",
      service_type: "1:1 call",
      second_category: "Duration",
      duration: "30 min",
      amount: "300",
      icon: <BiVideo size={20} className="text-[#3B82F6]" />,
    },
    {
      heading: "Resume Review",
      subheading: "I'll refine your resume to land better opportunities.",
      service_type: "Priority DM",
      second_category: "Replies",
      duration: "In 1 day",
      amount: "100",
      icon: <MdOutlineMessage size={20} className="text-[#3B82F6]" />,
    },

    {
      heading: "1 month career guidance full confidence",
      subheading:
        "2 x 1:1 call - Career guidance\n 1 X Priority DM - Resume review...",
      service_type: "Package",
      second_category: "Duration",
      duration: "1 month",
      amount: "1,000",
      icon: <GoPackage size={20} className="text-[#3B82F6]" />,
    },

    {
      heading: "SQL Basics Cheat Sheet",
      subheading: "To strengthen your SQL and data skills.",
      service_type: "Digital product",
      second_category: " ",
      duration: " ",
      amount: "500",
      icon: <RiShoppingBag4Line size={20} className="text-[#3B82F6]" />,
    },
    {
      heading: "Interview tips and tricks advice",
      subheading: "Practical strategies to boost your interview confidence.",
      service_type: "Webinar",
      second_category: "Date",
      duration: "28th Oct",
      amount: "1,000",
      icon: <MdOutlineDesktopWindows size={20} className="text-[#3B82F6]" />,
    },
  ];

  const filteredServices = services.filter((service) => {
    if (activeTab === "All") return true;
    return service.service_type.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div>
      {!isServicesDisabled && (
        <>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(label) => setActiveTab(label)}
          />
          <div className="grid grid-cols-2 gap-8 pb-20 pt-5">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className={`drop-shadow-2xl ${
                  service.heading === "SQL Basics Cheat Sheet"
                    ? "w-full h-[528px] rounded-xl row-span-3"
                    : "w-full h-[248px] rounded-xl "
                } border border-[#CBD5E1] p-6 bg-white `}
              >
                {service.heading === "SQL Basics Cheat Sheet" && (
                  <div className=" bg-[#05192D] rounded-sm p-4 mt-2 h-64 flex flex-col gap-2 justify-center items-center mb-4">
                    <h1 className="text-2xl text-[#03EF62]">
                      Associate Data engineer in SQl
                    </h1>
                    <p className="text-lg text-white">
                      Gain practical knowledge in ETL, SQl and data warehousing
                      for data engineering
                    </p>
                  </div>
                )}
                <div className="flex justify-between items-start h-14">
                  <h1 className="text-xl text-[#334155]">{service.heading}</h1>
                  {service.service_type === "1:1 call" ||
                  service.service_type === "Priority DM" ? (
                    <Link
                      href={
                        SERVICE_ROUTES[
                          service.service_type as keyof typeof SERVICE_ROUTES
                        ]
                      }
                      className={`p-2 rounded-lg font-medium text-xs ${
                        isServicesDisabled
                          ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                          : "bg-[#334155] text-white hover:bg-[#1F2937]"
                      }`}
                    >
                      View Details
                    </Link>
                  ) : (
                    <button
                      className={`p-2 rounded-lg font-medium text-xs ${
                        isServicesDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#334155] text-white hover:bg-[#1F2937]"
                      }`}
                      disabled={isServicesDisabled}
                    >
                      View Details
                    </button>
                  )}
                </div>
                <p className="py-2 text-sm font-normal leading-5 text-[#334155] h-10">
                  {service.subheading.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                <div className="flex w-full items-center p-2 py-4 gap-4">
                  <div
                    className={`bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ${
                      service.heading === "SQL Basics Cheat Sheet"
                        ? "basis-1/2"
                        : ""
                    }`}
                  >
                    <p className="text-[#64748B] text-sm pb-2">Service type</p>
                    <div className="flex gap-2 items-center">
                      {service.icon}
                      <p className="text-sm whitespace-nowrap">
                        {service.service_type}
                      </p>
                    </div>
                  </div>

                  {service.heading !== "SQL Basics Cheat Sheet" && (
                    <div className="w-[2px] h-16 bg-[#E2E8F0]"></div>
                  )}

                  {service.heading !== "SQL Basics Cheat Sheet" ? (
                    <div className="bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2">
                      <p className="text-[#64748B] text-sm pb-2">
                        {service.second_category}
                      </p>
                      <div className="flex gap-2 items-center">
                        <GoClock size={20} className="text-[#3B82F6]" />
                        <p className="text-sm">{service.duration}</p>
                      </div>
                    </div>
                  ) : null}

                  <div className="w-[2px] h-16 bg-[#E2E8F0]"></div>

                  <div
                    className={`bg-[#EEF2FF] rounded-sm p-4 flex-1 px-2 ${
                      service.heading === "SQL Basics Cheat Sheet"
                        ? "basis-1/2"
                        : ""
                    }`}
                  >
                    <p className="text-[#64748B] text-sm pb-2">Amount</p>
                    <div className="flex items-center">
                      <MdCurrencyRupee size={16} className="text-[#00C16A]" />
                      <p className="text-sm">{service.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {isServicesDisabled && (
        <div className="mt-4 p-6 bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col justify-center items-center py-6 gap-5">
              <Image
                src="/error.png"
                alt="error"
                width={0}
                height={0}
                className="w-20 h-20"
                quality={100}
                unoptimized
              />
              <h2 className="text-2xl text-[#334155] font-semibold leading-8 text-center">
                Temporarily out of <br /> service
              </h2>
            </div>
            <button className="bg-[#334155] text-white px-6 py-2 rounded-lg text-xs font-medium">
              Find other mentors
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesCard;
