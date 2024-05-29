import React from "react";
// import MemberTable

import MemberTable from "../../components/member/MemberTable";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Link from "next/link";
import { getAllTeam } from "../../../config/http";

const Page = async () => {
  async function getData() {
    let res = await getAllTeam();
    return res;
  }

  const data = await getData();
  console.log("🚀 ~ Page ~ data:", data)

  return (
    <div class="flex">
      <div class="w-full py-1 ">
        <div className="w-full flex justify-between items-center px-7 py-5 mt-5">
          <h1 className="text-2xl text-gray-800 font-semibold">All Members</h1>
          <button className="bg-red-600 rounded text-white font-semibold shadow-md p-3">
            {" "}
            <Link href="/dashboard/members/add-member"> Add Member</Link>
          </button>
        </div>
        <div class="mx-3 mt-2">
          <table class="w-full h-[10vh] overflow-auto text-center text-gray-500">
            <tr class="border-b">
              <th className="pb-3">Member Name</th>
              <th>Role</th>
              <th>Email</th>
              {/* <th>Project</th> */}
              <th>Experience</th>
              <th>Action</th>
            </tr>

            <tbody>
              {data?.data?.map((item, index) => (
                <MemberTable
                  key={index}
                  id={item._id}
                  name={item.name}
                  role={item.role}
                  email={item.email}
                  project={item.project}
                  experience={item.experience}
                  msg={"ok"}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
