import { useState } from "react";

export default function Projects() {
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [thumbnail, setThumbnail] = useState(null);

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    alert("This is a static website. To add projects, edit the data in /public/data/projects.json");
  };

  return (
    <div>
      <h2>Add Project</h2>
      <div style={{backgroundColor: '#fff3cd', padding: '15px', borderRadius: '5px', marginBottom: '20px'}}>
        <p style={{color: '#856404', margin: 0}}>
          <strong>Note:</strong> This is a static website. To add or edit projects, please update the JSON file at <code>/public/data/projects.json</code>
        </p>
      </div>
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

        <button type="submit" disabled>Add Project (Disabled - Edit JSON directly)</button>
      </form>

      <hr />
    </div>
  );
}
