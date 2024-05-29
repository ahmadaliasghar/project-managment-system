"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  addTasks,
  getAllProjects,
  getAllTeam,
  getSingleTask,
  updateTask,
} from "../../../config/http";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { FaArrowLeftLong } from "react-icons/fa"; // Uncomment if using this icon

const TaskForm = ({ taskid }) => {
  const router = useRouter();

  const [teamMembers, setTeamMebers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    assignedTo: "",
    project: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function getData() {
      let res = await getAllTeam();
      console.log("🚀 ~ getData ~ res:", res);
      setTeamMebers(res.data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      let res = await getAllProjects();
      console.log("🚀 ~ getData ~ res:", res);
      setProjects(res.data);
    }

    getData();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  useEffect(() => {
    if (taskid) {
      async function getData() {
        let res = await getSingleTask(taskid);
        console.log("TASKS", res);
        setFormData({
          title: res.data.title,
          description: res.data.description,
          dueDate: formatDate(res.data.dueDate),
          project: res.data.project,
          assignedTo: res.data.assignedTo,
          status: res.data.status,
        });
      }

      getData();
    }
  }, [taskid]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.dueDate) newErrors.dueDate = "Due Date is required";
    if (!formData.assignedTo) newErrors.assignedTo = "Assigned To is required";
    if (!formData.project) newErrors.project = "Project is required";
    if (!formData.status) newErrors.status = "Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    try {
      if (taskid) {
        updateTask(taskid, JSON.stringify(formData))
          .then((res) => {
            console.log("🚀 ~ updateTask ~ res:", res);
            toast.success("Task Updated");
            router.push("/dashboard/tasks");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ updateTask ~ err:", err);
            toast.error("Error Updating Task");
          });
      } else {
        addTasks(JSON.stringify(formData))
          .then((res) => {
            console.log("🚀 ~ addTasks ~ res:", res);
            toast.success("Task Created");
            router.push("/dashboard/tasks");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ addTasks ~ err:", err);
            toast.error("Error Creating Task");
          });
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
      alert("An error occurred while saving the task");
    }
  };

  console.log("🚀 ~ TaskForm ~ formData:", formData);
  return (
    <div>
      <div className="flex flex-col gap-6 px-5">
        <div className="mt-4 w-[15%]">
          <Link
            href="/dashboard/tasks"
            className="flex gap-2 font-bold items-center"
          >
            {/* <FaArrowLeftLong /> */}
            <label className="cursor-pointer">Go Back</label>
          </Link>
        </div>
        <div className="flex justify-between">
          <p className="text-lg w-[180px] text-center font-medium text-red-500 border-b-2 border-red-500">
            Task Information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[80%]">
          <div className="flex gap-4">
            <div className="w-[50%] flex flex-col">
              <label htmlFor="title" className="font-semibold mb-1">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Task"
                className="border bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.title}
                </span>
              )}
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="assignedTo" className="font-semibold mb-1">
                Assigned To
              </label>
              <select
                name="assignedTo"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
              >
                <option value={""}>Choose Member</option>
                {teamMembers?.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name}
                  </option>
                ))}
              </select>
              {errors.assignedTo && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.assignedTo}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-[50%] flex flex-col">
              <label htmlFor="dueDate" className="font-semibold mb-1">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.dueDate}
                onChange={handleChange}
              />
              {errors.dueDate && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.dueDate}
                </span>
              )}
            </div>
            <div className="w-[50%] flex flex-col">
              <label htmlFor="status" className="font-semibold mb-1">
                Status
              </label>
              <select
                name="status"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Choose Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="In Review">In Review</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.status}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="project" className="font-semibold mb-1">
                Projects
              </label>
              <select
                name="project"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="project"
                value={formData.project}
                onChange={handleChange}
              >
                <option value={""}>Choose Project</option>
                {projects?.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.title}
                  </option>
                ))}
              </select>
              {errors.project && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.project}
                </span>
              )}
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="description" className="font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="1"
                className="border bg-gray-100 rounded text-lg px-2 py-2 outline-none"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.description}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6"
            >
              {taskid ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
