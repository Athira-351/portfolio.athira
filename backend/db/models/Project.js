import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    link: {
      type: String,
      required: [true, "Project link is required"],
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        "Please provide a valid URL",
      ],
    },
    thumbnail_image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
