"use client";
import React, { useState } from "react";
import ActionLinks from "./ActionLinks";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import ConfirmModal from "./ConfirmModal";
import { deleteProject } from "../../config/http";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

const Tablesview = ({ id, title, category, lead, startDate, dueDate, status, msg }) => {
  const [item, setItem] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const handleDeleteClick = (item) => {
    setModalOpen(true);
    setItem(item);
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  const handleDelete = async () => {
    setModalOpen(false);
    deleteProject(id)
      .then((res) => {
        console.log("🚀 ~ deleteProject ~ res:", res);
        toast.success("Project Deleted");
        router.refresh();
      })
      .catch((err) => {
        console.log("🚀 ~ deleteProject ~ err:", err);
        toast.error("Error Deleting Project");
      });
  };

  return (
    <tr className="border-b h-[65px]">
      <td>{title}</td>
      <td>
        <p className="text-black">{category}</p>
        {/* <p>{lead}</p> */}
      </td>
      <td>{lead}</td>
      <td>{formatDate(startDate)}</td>
      <td>{formatDate(dueDate)}</td>
      <td>
        <div className="flex items-center justify-center">
          <p
            className={`bg-${status}-200 w-[60%] rounded-full font-medium text-${status}-700 text-sm`}
          >
            {status}
          </p>
        </div>
      </td>
      {msg === "ok" ? (
        <td style={{ height: "inherit" }}>
          <div className="flex items-center gap-2 justify-center">
            <Link href={`/dashboard/projects/edit-project/${id}`}>
              {" "}
              <FiEdit />{" "}
            </Link>
            <button onClick={() => handleDeleteClick(true)}>
              {" "}
              <MdDeleteOutline size={22} />{" "}
            </button>
            <ConfirmModal
              id={id}
              title={title}
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onConfirm={handleDelete}
            />
          </div>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default Tablesview;
