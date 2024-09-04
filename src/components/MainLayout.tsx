"use client";
import Link from "next/link";
import MainHeader from "./MainHeader";
import { MenuContext } from "@/context/MenuContext";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { useContext } from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { open } = useContext(MenuContext);
  return (
    <div className=" bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-lg w-60 p-4"> */}
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4`}>
          <ul>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <AiOutlineHome />
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <GrProjects />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <FaCheck />
              <h3 className="flex-1">Singule</h3>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <FaCheckDouble />
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <SiHelpscout />
              <Link href="/about-us">About</Link>
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 gap-2">
              <FiPhoneCall />
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
