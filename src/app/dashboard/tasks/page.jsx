import React from "react";
// import MemberTable

import TaskTable from "../../components/task/TaskTable";

import Link from "next/link";
import { getAllTask } from "../../../config/http";

const Page = async () => {
  async function getData() {
    let res = await getAllTask();
    return res;
  }

  const data = await getData();
  console.log("🚀 ~ Page ~ data:", data)

  return (
    <div class="flex">
      <div class="w-full py-1 ">
        <div className="w-full flex justify-between items-center px-7 py-5 mt-5">
          <h1 className="text-2xl text-gray-800 font-semibold">All Tasks</h1>
          <button className="bg-red-600 rounded text-white font-semibold shadow-md p-3">
            {" "}
            <Link href="/dashboard/tasks/add-task"> Add Task</Link>
          </button>
        </div>
        <div class="mx-3 mt-2">
          <table class="w-full h-[10vh] overflow-auto text-center text-gray-500">
            <tr class="border-b">
              <th className="pb-3">Title</th>
              <th>Project</th>
              <th>Assign To</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            <tbody>
              {data?.data?.map((item, index) => (
                <TaskTable
                  key={index}
                  id={item._id}
                  title={item.title}
                  project={item.project}
                  assignedTo={item.assignedTo}
                  dueDate={item.dueDate}
                  status={item.status}
                  msg={"ok"}
                />
              ))}
            </tbody>
          </table>
        </div>
        {/* <!-- Mian --> */}
      </div>
    </div>
  );
};

export default Page;
