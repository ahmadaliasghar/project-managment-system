import { connectDB } from "../../../../lib/connectDb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import Projects from "../../../../models/projectModel";

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();
    const projectId = params?.id;
    console.log("🚀 ~ DELETE ~ projectId:", projectId)

    let project = await Projects.findOne({_id: projectId});

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          error: "Project not found!!!",
        },
        { status: 404 }
      );
    }

    await Projects.deleteOne({_id: projectId});

    return NextResponse.json({
      success: true,
      status: 200,
      error: "Projects Deleted",
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

    const projectId = params?.id ? new ObjectId(params.id) : null;

    const query = projectId ? { _id: projectId } : {};

    let project = await Projects.findOne(query);

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          error: "Projects not found!!!",
        },
        { status: 404 }
      );
    }

    let updatedProject = await Projects.updateOne(query, { $set: req });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Project Updated",
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
    const projectId = params?.id ? new ObjectId(params.id) : null;

    const query = projectId ? { _id: projectId } : {};

    let project = await Projects.findOne(query);

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          error: "Project not found!!!",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      status: 200,
      data: project,
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
