import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    description: {
      type: String,
    },
    basic_salary: {
      type: Number,
    },
    view_access: {
      type: [String],
    },
    edit_access: {
      type: [String],
    },
  },
  { timestamps: true }
);

export const Role = mongoose.model("Role", roleSchema);
