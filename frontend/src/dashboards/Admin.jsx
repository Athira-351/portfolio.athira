// import { useState } from "react";
// import axios from "axios";

// export default function Admin() {
//   // Project form state
//   const [projectForm, setProjectForm] = useState({
//     title: "",
//     description: "",
//     link: "",
//   });

//   // Skill form state
//   const [skillForm, setSkillForm] = useState({
//     name: "",
//     proficiency: "",
//     description: "",
//   });

//   // Add project
//   const handleProjectSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/projects", projectForm);
//     alert("Project Added!");
//     setProjectForm({ title: "", description: "", link: "" });
//   };

//   // Add skill
//   const handleSkillSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/skills", skillForm);
//     alert("Skill Added!");
//     setSkillForm({ name: "", proficiency: "", description: "" });
//   };

//   return (
//     <div>
//       <h1 style={{ fontSize: "24px" }}>Admin Panel</h1>

//       {/* Project Form */}
//       <h2>Add Project</h2>
//       <form onSubmit={handleProjectSubmit}>
//         <input
//           placeholder="Title"
//           value={projectForm.title}
//           onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
//         /><br />
//         <textarea
//           placeholder="Description"
//           value={projectForm.description}
//           onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
//         /><br />
//         <input
//           placeholder="Link"
//           value={projectForm.link}
//           onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
//         /><br />
//         <button type="submit">Add Project</button>
//       </form>

//       <hr />

//       {/* Skill Form */}
//       <h2>Add Skill</h2>
//       <form onSubmit={handleSkillSubmit}>
//         <input
//           placeholder="Skill Name"
//           value={skillForm.name}
//           onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
//         /><br />
//         <input
//           placeholder="Proficiency (e.g., Beginner, Intermediate, Expert)"
//           value={skillForm.proficiency}
//           onChange={(e) => setSkillForm({ ...skillForm, proficiency: e.target.value })}
//         /><br />
//         <textarea
//           placeholder="Description"
//           value={skillForm.description}
//           onChange={(e) => setSkillForm({ ...skillForm, description: e.target.value })}
//         /><br />
//         <button type="submit">Add Skill</button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";
import Projects from "../pages/Admin/Projects";
import Skills from "../pages/Admin/Skills";


export default function Admin() {
  
  return (
  <div>
    <h1 style={{ fontSize: "24px" }}>Admin Panel</h1>
    <Projects />
    <Skills />
  </div>
  );
}

