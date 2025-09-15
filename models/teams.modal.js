import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    leader_id: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Employee",
    },
    member_ids: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Employee",
    },
  },
  { timestamps: true }
);

export const Team = mongoose.model("Team", teamSchema);
