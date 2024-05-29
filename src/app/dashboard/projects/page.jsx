import React from "react";

import Tablesview from "../../components/Tablesview";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Link from "next/link";
import { getAllProjects } from "../../../config/http";

const Page = async () => {
  async function getData() {
    let res = await getAllProjects();
    return res;
  }

  const data = await getData();
  console.log("🚀 ~ Page ~ data:", data)

  return (
    <div class="flex">
      <div class="w-full py-1 ">
        <div className="w-full flex justify-between items-center px-7 py-5 mt-5">
          <h1 className="text-2xl text-gray-800 font-semibold">All Projects</h1>
          <button className="bg-red-600 rounded text-white font-semibold shadow-md p-3">
            {" "}
            <Link href="/dashboard/projects/add-project"> Add Project</Link>
          </button>
        </div>
        <div class="mx-3 mt-2
        ">
          <table class="w-full h-[10vh] overflow-auto text-center text-gray-500">
            <tr class="border-b py-2 pb-4">
              <th className="pb-3">Project</th>
              <th>Category</th>
              <th>Lead Member</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            <tbody>
              {data?.data?.map((item, index) => (
                <Tablesview
                  key={index}
                  id={item._id}
                  title={item.title}
                  category={item.category}
                  lead={item.projectLead.name}
                  startDate={item.startDate}
                  dueDate={item.dueDate}
                  status={item.status}
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
