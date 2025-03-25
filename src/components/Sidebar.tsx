"use client";
import React, { useState } from "react";
import {
  FaRegUser,
  FaBriefcase,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Sidebar() {
  const sidebarItems = [
    { name: "Mentor", icon: FaRegUser },
    { name: "Job", icon: FaBriefcase },
    { name: "Booking", icon: FaCalendarAlt },
    { name: "Priority DM", icon: FaPaperPlane },
  ];

  const [selectedItem, setSelectedItem] = useState("Mentor");

  return (
    <div className="h-dvh w-52 bg-[#F8FAFC] pt-24 px-5">
      {sidebarItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = item.name === selectedItem;
        return (
          <div
            key={index}
            onClick={() => setSelectedItem(item.name)}
            className={`flex justify-items-start gap-2 items-center ${
              isActive ? "bg-[#E2E8F0]" : ""
            } w-40 h-10 rounded-lg px-2 cursor-pointer`}
          >
            <Icon className="text-[#94A3B8] w-4 h-4" />
            <p className="text-[#0F172A] font-medium text-base">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
