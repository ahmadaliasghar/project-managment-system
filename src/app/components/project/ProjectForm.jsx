"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  addProject,
  getAllTeam,
  getSingleProject,
  updateProject,
} from "../../../config/http";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProjectForm = ({ projectId }) => {
  const router = useRouter();

  const [teamMembers, setTeamMembers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    startDate: "",
    dueDate: "",
    teamMembers: [],
    projectLead: "",
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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const newTeamMembers = checked
        ? [...prevData.teamMembers, value]
        : prevData.teamMembers.filter((id) => id !== value);
      return { ...prevData, teamMembers: newTeamMembers };
    });
  };

  useEffect(() => {
    async function getData() {
      let res = await getAllTeam();
      console.log("🚀 ~ getData ~ res:", res);
      setTeamMembers(res.data);
    }

    getData();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  useEffect(() => {
    if (projectId) {
      async function getData() {
        let res = await getSingleProject(projectId);
        console.log("🚀 ~ getData ~ res:", res);
        setFormData({
          title: res.data.title,
          category: res.data.category,
          dueDate: formatDate(res.data.dueDate),
          startDate: formatDate(res.data.startDate),
          projectLead: res.data.projectLead,
          status: res.data.status,
          teamMembers: res.data.teamMembers,
        });
      }

      getData();
    }
  }, [projectId]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Project title is required";
    if (!formData.category) newErrors.category = "Project category is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";
    if (formData.teamMembers.length === 0) newErrors.teamMembers = "At least one team member is required";
    if (!formData.projectLead) newErrors.projectLead = "Project lead is required";
    if (!formData.status) newErrors.status = "Project status is required";

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
      if (projectId) {
        updateProject(projectId, JSON.stringify(formData))
          .then((res) => {
            console.log("🚀 ~ addProject ~ res:", res);
            toast.success("Project Updated");
            router.push("/dashboard/projects");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ addProject ~ err:", err);
            toast.error("Error Updating Project");
          });
      } else {
        addProject(JSON.stringify(formData))
          .then((res) => {
            console.log("🚀 ~ addProject ~ res:", res);
            toast.success("Project Created");
            router.push("/dashboard/projects");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ addProject ~ err:", err);
            toast.error("Error Creating Project");
          });
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
      alert("An error occurred while saving the project");
    }
  };

  console.log("🚀 ~ ProjectForm ~ formData:", formData);
  return (
    <div>
      <div className="flex flex-col gap-6 px-5">
        <div className="mt-4 w-[15%]">
          <Link href="/dashboard/projects" className="flex gap-2 font-bold items-center">
            {/* <FaArrowLeftLong /> */}
            <label className="cursor-pointer">Go Back</label>
          </Link>
        </div>
        <div className="flex justify-between">
          <p className="text-lg w-[180px] text-center font-medium text-red-500 border-b-2 border-red-500">
            Project Information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[80%]">
          <div className="flex gap-4">
            <div className="w-[50%] flex flex-col">
              <label className="font-semibold mb-1" htmlFor="title">Project Title *</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Project Title"
                className="border bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="font-semibold mb-1" htmlFor="category">Project Category *</label>
              <select
                name="category"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Choose Project Category</option>
                <option value="E.Com">E.Com</option>
                <option value="Bloging">Bloging</option>
                <option value="Technical">Technical</option>
                <option value="Management">Management</option>
              </select>
              {errors.category && <span className="text-red-500 text-xs">{errors.category}</span>}
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-[50%] flex flex-col">
              <label className="font-semibold mb-1" htmlFor="startDate">Project Start Date *</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.startDate}
                onChange={handleChange}
              />
              {errors.startDate && <span className="text-red-500 text-xs">{errors.startDate}</span>}
            </div>
            <div className="w-[50%] flex flex-col">
              <label className="font-semibold mb-1" htmlFor="dueDate">Project Deadline *</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.dueDate}
                onChange={handleChange}
              />
              {errors.dueDate && <span className="text-red-500 text-xs">{errors.dueDate}</span>}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-[50%]">
              <label className="font-semibold mb-1" htmlFor="teamMembers">Project Members *</label>
              <div className="flex flex-col gap-2">
                {teamMembers?.map((member) => (
                  <label key={member._id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="teamMembers"
                      value={member._id}
                      checked={formData.teamMembers.includes(member._id)}
                      onChange={handleCheckboxChange}
                    />
                    {member.name} ({member.role})
                  </label>
                ))}
              </div>
              {errors.teamMembers && <span className="text-red-500 text-xs">{errors.teamMembers}</span>}
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="font-semibold mb-1" htmlFor="projectLead">Project Lead *</label>
              <select
                name="projectLead"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="projectLead"
                value={formData.projectLead}
                onChange={handleChange}
              >
                <option value="">Choose Project Lead</option>
                {teamMembers?.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name} ({member.role})
                  </option>
                ))}
              </select>
              {errors.projectLead && <span className="text-red-500 text-xs">{errors.projectLead}</span>}
            </div>
          </div>

          <div className="w-[50%] flex flex-col">
            <label className="font-semibold mb-1" htmlFor="status">Status *</label>
            <select
              name="status"
              className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
              id="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Choose Project Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            {errors.status && <span className="text-red-500 text-xs">{errors.status}</span>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6"
            >
              {projectId ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
