import { useState } from "react";
import axios from "axios";

export default function Skills() {
  // Skill form state
  const [skillForm, setSkillForm] = useState({
    name: "",
    proficiency: "",
    description: "",
  });
  // Add skill
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/skills", skillForm);
    alert("Skill Added!");
    setSkillForm({ name: "", proficiency: "", description: "" });
  };

  return (
    <div>
      {/* Skill Form */}
      <h2>Add Skill</h2>
      <form onSubmit={handleSkillSubmit}>
        <input
          placeholder="Skill Name"
          value={skillForm.name}
          onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
        /><br />
        <input
          placeholder="Proficiency (e.g., Beginner, Intermediate, Expert)"
          value={skillForm.proficiency}
          onChange={(e) => setSkillForm({ ...skillForm, proficiency: e.target.value })}
        /><br />
        <textarea
          placeholder="Description"
          value={skillForm.description}
          onChange={(e) => setSkillForm({ ...skillForm, description: e.target.value })}
        /><br />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}
