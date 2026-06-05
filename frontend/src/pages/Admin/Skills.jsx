import { useState } from "react";

export default function Skills() {
  // Skill form state
  const [skillForm, setSkillForm] = useState({
    name: "",
    proficiency: "",
    description: "",
  });
  const [icon, setIcon] = useState(null);

  // Add skill
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    alert("This is a static website. To add skills, edit the data in /public/data/skills.json");
  };

  return (
    <div>
      {/* Skill Form */}
      <h2>Add Skill</h2>
      <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '5px', marginBottom: '20px'}}>
        <p style={{color: '#856404', margin: 0}}>
          <strong>Note:</strong> This is a static website. To add or edit skills, please update the JSON file at <code>/public/data/skills.json</code>
        </p>
      </div>
      <form onSubmit={handleSkillSubmit}>
        <input
          placeholder="Skill Name"
          value={skillForm.name}
          onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
          required
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
        <label>
          Icon (Image):
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setIcon(e.target.files[0])}
          />
        </label>
        <br />
        {icon && <p>Selected icon: {icon.name}</p>}
        <br />
        <button type="submit" disabled>Add Skill (Disabled - Edit JSON directly)</button>
      </form>
    </div>
  );
}
