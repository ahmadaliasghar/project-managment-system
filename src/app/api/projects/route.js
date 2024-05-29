import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDb";
import Projects from "../../../models/projectModel";

export const GET = async (request) => {
  try {
    await connectDB();

    const projects = await Projects.find({})
      .populate({
        path: "projectLead",
        model: "TeamMember", 
      })
      // .populate({
      //   path: "teamMembers",
      //   model: "TeamMember", 
      // })
      // .populate({
      //   path: "tasks",
      //   model: "Task", 
      // });

    return NextResponse.json({
      success: true,
      status: 200,
      data: projects,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      status: 500,
      error: "Internal Server Error",
    });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const req = await request.json();
    const newProject = await Projects.create(req);

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Project Created",
      data: newProject,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
