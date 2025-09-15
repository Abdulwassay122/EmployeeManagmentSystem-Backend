import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    org_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    assigned_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    assigned_to_employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    assigned_to_team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    status: {
      type: String,
      enum: ["todo", "in_progress", "done"],
    },
    last_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Team", taskSchema);
