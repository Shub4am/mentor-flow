import React from "react";

interface TabsProps {
  tabs: { label: string }[];
  onTabChange: (label: string) => void;
  activeTab: string;
}

function Tabs({ tabs, onTabChange, activeTab }: TabsProps) {
  return (
    <div className="flex gap-4 px-2 py-1 bg-[#F1F5F9] rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`px-4 flex-1 py-2 rounded-md text-sm font-medium ${
            activeTab === tab.label
              ? "bg-white text-[#334155]"
              : "bg-[#F1F5F9] text-[#64748B]"
          }`}
          onClick={() => onTabChange(tab.label)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
