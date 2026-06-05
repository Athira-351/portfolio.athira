import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <button
        onClick={() => navigate("/")}
        className="mb-8 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto">
        {project.thumbnail_image && (
          <img
            src={project.thumbnail_image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 whitespace-pre-wrap">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-white bg-gradient-to-r from-pink-500 to-indigo-600 font-semibold hover:shadow-lg transition"
          >
            Visit Project →
          </a>
        )}
      </div>
    </div>
  );
}
