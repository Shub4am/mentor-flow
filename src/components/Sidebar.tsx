"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaRegUser,
  FaBriefcase,
  FaCalendarAlt,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

interface SidebarProps {
  isIconOnly?: boolean;
}

function Sidebar({ isIconOnly = false }: SidebarProps) {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("Mentor");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (pathname.includes("mentor-details")) {
    isIconOnly = true;
  }

  const sidebarItems = [
    { name: "Mentor", icon: FaRegUser },
    { name: "Job", icon: FaBriefcase },
    { name: "Booking", icon: FaCalendarAlt },
    { name: "Priority DM", icon: FaPaperPlane },
  ];

  return (
    <>
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-[#0F172A] text-2xl"
        >
          {isSidebarOpen ? (
            <FaTimes
              className="text-[#334155] bg-white border border-[#eef0f1] p-2 drop-shadow-lg shadow-xl"
              size={40}
            />
          ) : (
            <FaBars
              className="text-[#334155] bg-white border border-[#eef0f1] p-2 drop-shadow-lg shadow-xl"
              size={40}
            />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 min-h-screen w-full flex flex-col items-center justify-center sm:justify-normal  bg-[#F8FAFC] pt-24 px-5 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-auto ${isIconOnly ? "w-28" : "w-52"}`}
      >
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.name === selectedItem;
          return (
            <Link
              href="/"
              key={index}
              onClick={() => setSelectedItem(item.name)}
              className={`flex ${
                isIconOnly ? "justify-center" : "justify-items-start gap-2"
              } items-center ${isActive ? "bg-[#E2E8F0]" : ""} ${
                isIconOnly ? "w-10" : "w-40"
              } h-10 rounded-lg px-2 cursor-pointer`}
            >
              <Icon className="text-[#94A3B8] w-4 h-4" />
              {!isIconOnly && (
                <p className="text-[#0F172A] font-medium text-base">
                  {item.name}
                </p>
              )}
            </Link>
          );
        })}
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#020308ea] text-center ease-in duration-300 bg-opacity-50 z-30 sm:hidden text-4xl"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
