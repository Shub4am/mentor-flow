"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaRegUser,
  FaBriefcase,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

interface SidebarProps {
  isIconOnly?: boolean;
}

function Sidebar({ isIconOnly = false }: SidebarProps) {
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("Mentor");

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
    <div
      className={`${
        isIconOnly ? "w-28" : "w-52"
      } bg-[#F8FAFC] pt-24 px-5 fixed z-50 h-full`}
    >
      {sidebarItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = item.name === selectedItem;
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
