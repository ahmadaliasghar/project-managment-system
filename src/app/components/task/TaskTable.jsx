'use client'
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { deleteTask } from "../../../config/http";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmModal from "../ConfirmModal";

const TaskTable = ({ id, title, project, assignedTo, dueDate, status, msg }) => {
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
    deleteTask(id)
      .then((res) => {
        console.log("🚀 ~ deleteProject ~ res:", res);
        toast.success("Task Deleted");
        router.refresh();
      })
      .catch((err) => {
        console.log("🚀 ~ deleteProject ~ err:", err);
        toast.error("Error Deleting Task");
      });
  };

  return (
    <tr className="border-b h-[65px]">
      <td>{title}</td>
      <td>
        <p className="text-black">{project?.title}</p>
        {/* <p>{lead}</p> */}
      </td>
      <td>{assignedTo.name}</td>
      <td>{formatDate(dueDate)}</td>
      <td>
        <div className="flex items-center justify-center">
            {status}
        </div>
      </td>
      {msg === "ok" ? (
        <td style={{ height: "inherit" }}>
          <div className="flex items-center gap-2 justify-center">
            <Link href={`/dashboard/tasks/edit-task/${id}`}>
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

export default TaskTable;
