import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const MentorsCard = () => {
  const Mentors = [
    {
      name: "Jonny Rose",
      image: "/mentor1.png",
      role: "Sr. Software Engineering at Google",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || || Growth Management || Full Stack Developer",
    },
    {
      name: "Dev Jain",
      image: "/mentor2.png",
      role: "Sr. Software Engineering at Microsoft",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN)",
    },
    {
      name: "Rishi Mehta",
      image: "/mentor3.png",
      role: "Sr. Software Engineering at JP Morgan",
      bio: "Prev Application Engineer @Google",
    },
    {
      name: "Heet Mistry",
      image: "/mentor4.png",
      role: "Sr. Software Engineering at Zomato",
      bio: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development",
    },
  ];

  return (
    <div>
      {/* mentor cards */}
      {Mentors.map((mentor, index) => (
        <div
          key={index}
          className="flex border-1 border-[#CBD5E1] drop-shadow-md rounded-xl mb-4"
        >
          <div className="relative flex flex-col max-w-48 min-h-48">
            <Image
              src={mentor.image}
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

          {/* Mentors data */}
          <div className="flex flex-col gap-4 p-5 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 justify-center items-center">
                <h1 className="text-xl font-medium leading-7">{mentor.name}</h1>
                <IoShieldCheckmarkOutline
                  className="text-[#00C16A]"
                  size={16}
                />
              </div>
              <Link
                href="/mentor-details"
                className="bg-[#334155] p-2 text-white rounded-lg font-medium"
              >
                View profile
              </Link>
            </div>

            <p className="text-lg font-normal leading-7">{mentor.role}</p>
            <div className="bg-[#F1F5F9] p-5 rounded-lg min-h-24 text-md leading-5">
              <p className="text-md leading-5">{mentor.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorsCard;
