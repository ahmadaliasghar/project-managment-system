'use client'
import React, { useEffect, useState } from "react";
import Tablesview from "../components/Tablesview";
import Cards from "../components/Cards";
import { IoFilter } from "react-icons/io5";
import { getAllProjects, getAllTask, getAllTeam } from "../../config/http";

const Page = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [membersData, setMembersData] = useState([]);
  const [tasksData, setTasksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const projects = await getAllProjects();
      const members = await getAllTeam();
      const tasks = await getAllTask();

      setProjectsData(projects?.data);
      setMembersData(members?.data);
      setTasksData(tasks?.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  function calculatePercentageChange(current, previous) {
    if (previous === 0) return 100;
    return ((current - previous) / previous) * 100;
  }

  function filterDataByMonth(data, monthOffset = 0) {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() - monthOffset + 1, 0);

    return data.filter(item => {
      const createdAt = new Date(item.createdAt);
      return createdAt >= startOfMonth && createdAt <= endOfMonth;
    });
  }

  const currentProjects = filterDataByMonth(projectsData);
  const prevProjects = filterDataByMonth(projectsData, 1);

  const currentMembers = filterDataByMonth(membersData);
  const prevMembers = filterDataByMonth(membersData, 1);

  const currentTasks = filterDataByMonth(tasksData);
  const prevTasks = filterDataByMonth(tasksData, 1);

  const projectChangePercentage = calculatePercentageChange(currentProjects.length, prevProjects.length);
  const memberChangePercentage = calculatePercentageChange(currentMembers.length, prevMembers.length);
  const taskChangePercentage = calculatePercentageChange(currentTasks.length, prevTasks.length);

  const filteredProjects = statusFilter === "All" 
    ? currentProjects 
    : currentProjects.filter(project => project.status === statusFilter);

  return (
    <div className="flex">
      <div className="w-full h-[100vh] py-1">
        <div className="flex flex-col gap-4 px-3">
          <div className="flex justify-between h-[25vh] mt-2 gap-3 p-3">
            <Cards
              subject={"Total Projects"}
              num={currentProjects.length}
              percentage={projectChangePercentage}
            />
            <Cards
              subject={"Total Team"}
              num={currentMembers.length}
              percentage={memberChangePercentage}
            />
            <Cards
              subject={"Total Tasks"}
              num={currentTasks.length}
              percentage={taskChangePercentage}
            />
          </div>

          <div className="flex justify-between mx-3 px-2">
            <h1 className="text-xl font-semibold">Current Projects</h1>
            <div className="dropdown">
              <button className="dropbtn rounded shadow-md p-2"><IoFilter /> Apply Filter</button>
              <div className="dropdown-content">
                <a href="#" onClick={() => setStatusFilter("All")}>All</a>
                <a href="#" onClick={() => setStatusFilter("In Progress")}>In Progress</a>
                <a href="#" onClick={() => setStatusFilter("Completed")}>Completed</a>
              </div>
            </div>
          </div>

          <div className="mx-3 mt-2">
            <table className="w-full h-[10vh] overflow-auto text-center text-gray-500">
              <thead>
                <tr className="border-b">
                  <th className="pb-3">Project</th>
                  <th>Category</th>
                  <th>Lead Member</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((item, index) => (
                    <Tablesview
                      key={index}
                      id={item._id}
                      title={item.title}
                      category={item.category}
                      lead={item.projectLead.name}
                      startDate={item.startDate}
                      dueDate={item.dueDate}
                      status={item.status}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">No data found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
