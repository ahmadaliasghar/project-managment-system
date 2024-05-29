import { connectDB } from "../../../../lib/connectDb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import teamMember from "../../../../models/teamMemberModel";
export const DELETE = async (request, { params }) => {
  try {
    await connectDB();
    const memberId = params?.id ? new ObjectId(params.id) : null;

    const query = memberId ? { _id: memberId } : {};

    let member = await teamMember.findOne(query);

    if (!member) {
      return NextResponse.json(
        {
          success: false,
          error: "Member not found!!!",
        },
        { status: 404 }
      );
    }

    await teamMember.deleteOne(query);

    return NextResponse.json({
      success: true,
      status: 200,
      error: "Members Deleted",
    });
  } catch (error) {
    console.log("🚀 ~ DELETE ~ error:", error)
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

    const memberId = params?.id;
    console.log("🚀 ~ PUT ~ memberId:", memberId)

    const query = memberId ? { _id: memberId } : {};

    let member = await teamMember.findOne(query);

    if (!member) {
      return NextResponse.json(
        {
          success: false,
          error: "Members not found!!!",
        },
        { status: 404 }
      );
    }

    let updatedmember = await teamMember.updateOne(query, { $set: req });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Member Updated",
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
    const memberId = params?.id ? new ObjectId(params.id) : null;

    const query = memberId ? { _id: memberId } : {};

    let member = await teamMember.findOne(query);

    if (!member) {
      return NextResponse.json(
        {
          success: false,
          error: "Member not found!!!",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      status: 200,
      data: member,
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
