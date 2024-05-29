"use client"

import Link from 'next/link';
import { MdDeleteOutline } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

// Define the component
function ActionLinks() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    console.log("Item deleted.");
    setModalOpen(false); // Close modal on delete
  };

  return (
    <div className='flex justify-center gap-2 text-lg items-center'>
      <Link href="/edit" > <GrView /> </Link>
      <Link href="/edit" > <FiEdit /> </Link>
      <button onClick={() => setModalOpen(true)}> <MdDeleteOutline /> </button>
      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
      
    </div>
  );
}

export default ActionLinks;
