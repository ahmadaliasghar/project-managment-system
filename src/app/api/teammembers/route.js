import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDb";
import TeamMember from "../../../models/teamMemberModel";

export const GET = async (request) => {
  try {
    await connectDB();
    const members = await TeamMember.find({})
    .populate({
        path: "projects",
        model: "projects", 
      })
    
    return NextResponse.json({
      success: true,
      status: 200,
      data: members,
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
    const newMember = await TeamMember.create(req);

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Member Created",
      data: newMember,
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
