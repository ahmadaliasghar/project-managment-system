import { connectDB } from "../../../../lib/connectDb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import Tasks from "../../../../models/taskModel";

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();
    const taskId = params?.id ? new ObjectId(params.id) : null;

    const query = taskId ? { _id: taskId } : {};

    let task = await Tasks.findOne(query);

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: "Task not found!!!",
        },
        { status: 404 }
      );
    }

    await Tasks.deleteOne(query);

    return NextResponse.json({
      success: true,
      status: 200,
      error: "Tasks Deleted",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const req = await request.json();

    const taskId = params?.id ? new ObjectId(params.id) : null;

    const query = taskId ? { _id: taskId } : {};

    let task = await Tasks.findOne(query);

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: "Tasks not found!!!",
        },
        { status: 404 }
      );
    }

    let updatedtask = await Tasks.updateOne(query, { $set: req });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "task Updated",
      data: req,
    });

  } catch (error) {
    console.log("🚀 ~ PUT ~ error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  console.log("🚀 ~ GET ~ id:", params.id);
  try {
    await connectDB();
    const taskId = params?.id ? new ObjectId(params.id) : null;

    const query = taskId ? { _id: taskId } : {};

    let task = await Tasks.findOne(query);

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          error: "Task not found!!!",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      status: 200,
      data: task,
    });
  } catch (error) {
    console.log("🚀 ~ PUT ~ error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
