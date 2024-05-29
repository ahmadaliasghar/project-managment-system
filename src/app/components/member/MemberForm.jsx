"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  addMember,
  getAllTeam,
  getSingleMember,
  updateMember,
} from "../../../config/http";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { FaArrowLeftLong } from "react-icons/fa"; // Uncomment if using this icon

const MemberForm = ({ memberid }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    project: "",
    experience: "",
    about: "",
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
    if (memberid) {
      async function getData() {
        let res = await getSingleMember(memberid);
        console.log("🚀 ~ getData ~ res:", res);
        setFormData({
          name: res.data.name,
          role: res.data.role,
          email: res.data.email,
          project: res.data.project,
          experience: res.data.experience,
          about: res.data.about
        });
      }

      getData();
    }
  }, [memberid]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.about) newErrors.about = "About is required";

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
      if (memberid) {
        updateMember(memberid, JSON.stringify(formData))
          .then((res) => {
            console.log("🚀 ~ Member ~ res:", res);
            toast.success("Member Updated");
            router.push("/dashboard/members");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ Member ~ err:", err);
            toast.error("Error Updating Member");
          });
      } else {
        addMember(JSON.stringify(formData))
          .then((res) => {
            toast.success("Member Created");
            router.push("/dashboard/members");
            router.refresh();
          })
          .catch((err) => {
            console.log("🚀 ~ Member ~ err:", err);
            toast.error("Error Creating Member");
          });
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
      alert("An error occurred while saving the project");
    }
  };

  console.log("🚀 ~ MemberForm ~ formData:", formData);
  return (
    <div>
      <div className="flex flex-col gap-6 px-5">
        <div className="mt-4 w-[15%]">
          <Link
            href="/dashboard/members"
            className="flex gap-2 font-bold items-center"
          >
            {/* <FaArrowLeftLong /> */}
            <label className="cursor-pointer">Go Back</label>
          </Link>
        </div>
        <div className="flex justify-between">
          <p className="text-lg w-[180px] text-center font-medium text-red-500 border-b-2 border-red-500">
            Member Information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%]">
          <div className="flex gap-4">
            <div className="w-[50%] flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">Member Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Member Name"
                className="border bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="role" className="font-semibold mb-1">Role</label>
              <select
                name="role"
                className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none"
                id="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Choose Role</option>
                <option value="Designer">Designer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="HR">HR</option>
              </select>
              {errors.role && <span className="text-red-500 text-xs mt-1">{errors.role}</span>}
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <div className="w-[50%] flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>
            <div className="w-[50%] flex flex-col">
              <label htmlFor="experience" className="font-semibold mb-1">Experience</label>
              <input
                type="text"
                name="experience"
                id="experience"
                className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none"
                value={formData.experience}
                onChange={handleChange}
              />
              {errors.experience && <span className="text-red-500 text-xs mt-1">{errors.experience}</span>}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="about" className="font-semibold mb-1">About</label>
              <textarea
                name="about"
                id="about"
                rows="3"
                className="border bg-gray-100 rounded text-lg px-2 py-2 outline-none"
                value={formData.about}
                onChange={handleChange}
              />
              {errors.about && <span className="text-red-500 text-xs mt-1">{errors.about}</span>}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6"
            >
              {memberid ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberForm;
