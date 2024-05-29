'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import MemberForm from "../../../../components/member/MemberForm";

const Page = () => {
   const params = useParams();
   console.log("🚀 ~ Page ~ params:", params)
   
  return (
    <div>
        <MemberForm memberid={params.id} />
    </div>
  )
}

export default Page