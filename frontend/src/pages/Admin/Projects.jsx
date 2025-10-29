import { useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [thumbnail, setThumbnail] = useState(null);

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", projectForm.title);
    formData.append("description", projectForm.description);
    formData.append("link", projectForm.link);
    if (thumbnail) {
      formData.append("thumbnail_image", thumbnail);
    }

    await axios.post("http://localhost:5000/api/projects", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Project Added!");
    setProjectForm({ title: "", description: "", link: "" });
    setThumbnail(null);
  };

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleProjectSubmit}>
        <input
          placeholder="Title"
          value={projectForm.title}
          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
        /><br />

        <textarea
          placeholder="Description"
          value={projectForm.description}
          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
        /><br />

        <input
          placeholder="Link"
          value={projectForm.link}
          onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
        /><br />

        {/* File input for thumbnail */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
        /><br />

        <button type="submit">Add Project</button>
      </form>

      <hr />
    </div>
  );
}
