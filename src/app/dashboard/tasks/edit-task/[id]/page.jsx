'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import TaskForm from "../../../../components/task/TaskForm"

const Page = () => {
   const params = useParams();
   console.log("🚀 ~ Page ~ params:", params)
   
  return (
    <div>
        <TaskForm taskid={params.id} />
    </div>
  )
}

export default Page