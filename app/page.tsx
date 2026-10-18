import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { RiGrokAiFill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode; //an icon is a react node
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { title: "Home", icon: <GoHome /> },
  { title: "Explore", icon: <IoSearch /> },
  { title: "Notifications", icon: <IoNotificationsOutline /> },
  { title: "Chat", icon: <IoChatbubbleOutline /> },
  { title: "Bookmark", icon: <FaRegBookmark /> },
  { title: "Calls", icon: <IoCallSharp /> },
  { title: "Grok", icon: <RiGrokAiFill /> },
  { title: "Profile", icon: <IoPersonOutline /> },
  { title: "More", icon: <CiCircleMore /> },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitterX className="" />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-6 hover:bg-gray-600 px-4 py-2 w-fit rounded-full cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white p-4 rounded-full w-full mt-5 text-black ">Post</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
