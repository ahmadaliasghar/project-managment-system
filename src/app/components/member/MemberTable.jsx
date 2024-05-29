'use client'
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmModal from "../ConfirmModal";
import { useRouter } from "next/navigation";
import { deleteMember } from "../../../config/http";
import toast from "react-hot-toast";

const MemberTable = ({ id, name, role, email, project, experience, msg }) => {
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
    deleteMember(id)
      .then((res) => {
        console.log("🚀 ~ deleteProject ~ res:", res);
        toast.success("Member Deleted");
        router.refresh();
      })
      .catch((err) => {
        console.log("🚀 ~ deleteProject ~ err:", err);
        toast.error("Error Deleting Member");
      });
  };

  return (
    <tr className="border-b h-[65px]">
      <td>{name}</td>
      <td>
        <p className="text-black">{role}</p>
        {/* <p>{lead}</p> */}
      </td>
      <td>{email}</td>
      {/* <td>{project}</td> */}
      <td>
        <div className="flex items-center justify-center">{experience}</div>
      </td>
      {msg === "ok" ? (
        <td style={{ height: "inherit" }}>
          <div className="flex items-center gap-2 justify-center">
            <Link href={`/dashboard/members/edit-member/${id}`}>
              {" "}
              <FiEdit />{" "}
            </Link>
            <button onClick={() => handleDeleteClick(true)}>
              {" "}
              <MdDeleteOutline size={22} />{" "}
            </button>
            <ConfirmModal
              id={id}
              title={name}
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

export default MemberTable;
