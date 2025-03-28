"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import MentorsCard from "@/components/MentorsCard";

const roleOptions = [
  "SE/SDE",
  "DS/AI/ML",
  "Product Management",
  "Project Management",
  "Consulting",
  "Quantitative Finance",
];

const companyOptions = ["FAANG", "Startups", "MNC's", "Others"];

const slotOptions = ["This week", "Next week", "Anytime"];

const ratingOptions = ["Low to high", "High to low"];

const trendingSearches = ["Google", "Amazon", "Microsoft", "Slack"];
const recentSearches = ["Google", "Amazon"];

export default function MentorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [showSearchCard, setShowSearchCard] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const [isMentor, setIsMentor] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    role: [] as string[],
    company: [] as string[],
    slot: [] as string[],
    rating: [] as string[],
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSearchCard(false);
      }
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilter = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleFilterChange = (
    filterType: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [filterType]: newFilters,
      };
    });
  };

  const renderFilterDropdown = (
    title: string,
    options: string[],
    filterType: keyof typeof selectedFilters
  ) => (
    <div className="relative h-8" ref={filterRef}>
      <button
        onClick={() => toggleFilter(title)}
        className="flex items-center justify-between w-full bg-white text-xs font-medium p-2 rounded-lg drop-shadow-xl border-2 border-gray-300"
      >
        {title}
        <IoMdArrowDropdown />
      </button>
      {openFilter === title && (
        <div
          className={`absolute z-10  bg-white border rounded-lg shadow-lg drop-shadow-2xl mt-1 max-h-60 overflow-y-auto border-[#E2E8F0] ${
            title === "Role" ? "w-60" : "w-40"
          }`}
        >
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFilters[filterType].includes(option)}
                onChange={() => handleFilterChange(filterType, option)}
                className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const renderSelectedFilters = () => {
    const filterLabels = {
      role: "Role",
      company: "Company",
      slot: "Slot",
      rating: "Rating",
    };
    console.log(filterLabels);

    return (
      Object.keys(selectedFilters) as (keyof typeof selectedFilters)[]
    ).map((filterType) =>
      selectedFilters[filterType].map((filter) => (
        <div
          key={filter}
          className="flex items-center bg-white text-xs font-semibold p-2 rounded-lg drop-shadow-xl border-1 border-[#CBD5E1]"
        >
          {filter}
          <button
            onClick={() => handleFilterChange(filterType, filter)}
            className="ml-2 text-[#94A3B8]"
          >
            <RxCross2 size={20} />
          </button>
        </div>
      ))
    );
  };

  return (
    <div className="flex flex-col pl-[100px]">
      <div className="h-16 w-full bg-[#DBEAFE] flex justify-between items-center px-[106px]">
        <p className="text-2xl">Mentors</p>

        <button
          onClick={() => setIsMentor(!isMentor)}
          className={`flex items-center ${
            isMentor ? "w-44" : "w-36"
          } bg-white text-xs font-semibold p-2 rounded-lg drop-shadow-xl border-2 border-gray-300 cursor-pointer`}
        >
          {isMentor ? "Switch to mentor" : "Become a mentor"}
          {isMentor && (
            <div className="pl-4">
              <div className="w-8 h-5 rounded-full p-1 transition-colors duration-300 bg-[#E2E8F0]">
                <div className="w-3 h-3 rounded-full bg-white transform transition-transform duration-300 " />
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="px-[106px] w-full">
        <div className="flex justify-between items-center py-5 gap-4">
          {/* Search input */}
          <div className="relative flex flex-col bg-[#E2E8F0] px-3 py-2 justify-center items-center rounded-lg w-[352px]">
            <div className="flex items-center w-full">
              <IoMdSearch className="text-[#94A3B8]" size={24} />
              <input
                type="text"
                placeholder="Search by name, company, role"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setHasSearched(true);
                }}
                onFocus={() => setShowSearchCard(true)}
                ref={searchInputRef}
                className="w-full px-2 bg-transparent focus:outline-none"
              />
            </div>
            {showSearchCard && (
              <div className="absolute z-50 top-full mt-2 w-full bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-4 drop-shadow-2xl">
                {hasSearched ? (
                  <>
                    <p className="text-sm font-semibold">Recent search</p>
                    <ul>
                      {recentSearches.map((search, index) => (
                        <div
                          key={index}
                          className="flex gap-2 p-2 items-center"
                        >
                          <GoClock size={20} className="text-[#94A3B8]" />
                          <li className="text-sm text-[#334155]">{search}</li>
                        </div>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold mt-2">
                      Trending searches
                    </p>
                    <ul>
                      {trendingSearches.slice(0, 2).map((search, index) => (
                        <div
                          key={index}
                          className="flex gap-2 p-2 items-center"
                        >
                          <IoIosTrendingUp
                            size={20}
                            className="text-[#94A3B8]"
                          />
                          <li className="text-sm text-[#334155] ">{search}</li>
                        </div>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold">Trending searches</p>
                    <ul>
                      {trendingSearches.map((search, index) => (
                        <div
                          key={index}
                          className="flex gap-2 p-2 items-center"
                        >
                          <IoIosTrendingUp
                            size={20}
                            className="text-[#94A3B8]"
                          />
                          <li className="text-sm text-[#334155] ">{search}</li>
                        </div>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Filters */}
          <div className="flex space-x-2 pl-5 py-2" ref={filterRef}>
            {renderFilterDropdown("Role", roleOptions, "role")}
            {renderFilterDropdown("Company", companyOptions, "company")}
            {renderFilterDropdown("Slot", slotOptions, "slot")}
            {renderFilterDropdown("Rating", ratingOptions, "rating")}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {renderSelectedFilters()}
        </div>
        <MentorsCard />
      </div>
    </div>
  );
}
