import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      unique: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    proficiency: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert", ""],
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    icon: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
