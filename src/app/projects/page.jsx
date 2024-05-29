// import React from "react";

// import Tablesview from "../components/Tablesview";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import Link from "next/link";
// import { getAllProjects } from "../../config/http";

// const Page = async () => {
//   async function getData() {
//     let res = await getAllProjects();
//     return res;
//   }

//   const data = await getData();
//   console.log("🚀 ~ Page ~ data:", data)

//   return (
//     <div class="flex">
//       <Sidebar value="projects" />
//       <div class="w-full py-1 ">
//         <Header />
//         <div className="w-full flex justify-end px-7 py-5 mt-5">
//           <button className="bg-red-600 rounded text-white font-semibold shadow-md p-3">
//             {" "}
//             <Link href="/projects/add-project"> Add Project</Link>
//           </button>
//         </div>
//         <div class="mx-3 mt-4">
//           <table class="w-full h-[10vh] overflow-auto text-center text-gray-500">
//             <tr class="border-b">
//               <th>Project</th>
//               <th>Category</th>
//               <th>Lead Member</th>
//               <th>Start Date</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>

//             <tbody>
//               {data?.data?.map((item, index) => (
//                 <Tablesview
//                   key={index}
//                   id={item._id}
//                   title={item.title}
//                   category={item.category}
//                   lead={item.projectLead.name}
//                   dueDate={item.dueDate}
//                   status={item.status}
//                   msg={"ok"}
//                 />
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* <!-- Mian --> */}
//       </div>
//     </div>
//   );
// };

// export default Page;
