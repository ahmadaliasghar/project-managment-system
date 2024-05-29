import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import TabbedInterface from "../components/TabbedInterface";
import { getAllTeam } from "../../config/http";

const Page = async () => {
  async function getData() {
    let res = await getAllTeam();
    return res;
  }

  const data = await getData();
  console.log("🚀 ~ Page ~ data:", data);

  return (
    <div className="flex">
      <Sidebar value="members" />
      <div className="w-full py-1 ">
        <Header />
        <div className=" flex flex-col gap-6 px-5">
          <div className="mt-4 ">
            <Link href="/visa" className="flex gap-2 font-bold items-center">
              <FaArrowLeftLong />
              <label>Go Back</label>
            </Link>
          </div>
          <TabbedInterface />
        </div>
      </div>
    </div>
  );
};

export default Page;
