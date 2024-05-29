import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDb";
import Tasks from "../../../models/taskModel";

export const GET = async (request) => {
  try {
    await connectDB();
    const tasks = await Tasks.find({}).populate({
      path: 'project',
      model: 'projects'
    }).populate({
      path: 'assignedTo',
      model: 'TeamMember'
    })
    
    return NextResponse.json({
      success: true,
      status: 200,
      data: tasks,
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
    const newTask = await Tasks.create(req);

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Task Created",
      data: newTask,
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
