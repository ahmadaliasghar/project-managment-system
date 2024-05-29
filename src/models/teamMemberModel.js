import mongoose from "mongoose";
const { Schema } = mongoose;

const teamMemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "projects",
      },
    ],
  },  
  {
    timestamps: true,
  }
);

const teamMember =
  mongoose.models.TeamMember || mongoose.model("TeamMember", teamMemberSchema);

export default teamMember;
