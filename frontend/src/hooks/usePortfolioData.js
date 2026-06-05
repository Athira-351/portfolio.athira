/**
 * Custom React Hooks for Portfolio API
 * 
 * These hooks simplify data fetching and management in React components
 * 
 * Usage:
 * import { useProjects, useSkills } from './hooks/usePortfolioData.js';
 * 
 * function MyComponent() {
 *   const { projects, loading, error } = useProjects();
 *   
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   
 *   return <div>{projects.map(p => <h3>{p.title}</h3>)}</div>;
 * }
 */

import { useState, useEffect } from 'react';
import { apiClient } from '../api/client.js';

/**
 * Hook to fetch and manage projects
 * @returns {Object} { projects, loading, error, refetch }
 */
export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiClient.projects.getAll();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
};

/**
 * Hook to fetch single project by ID
 * @param {string} projectId - Project MongoDB ObjectId
 * @returns {Object} { project, loading, error }
 */
export const useProject = (projectId) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiClient.projects.getById(projectId);
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  return { project, loading, error };
};

/**
 * Hook to fetch and manage skills
 * @returns {Object} { skills, loading, error, refetch }
 */
export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiClient.skills.getAll();
      setSkills(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return { skills, loading, error, refetch: fetchSkills };
};

/**
 * Hook to fetch single skill by ID
 * @param {string} skillId - Skill MongoDB ObjectId
 * @returns {Object} { skill, loading, error }
 */
export const useSkill = (skillId) => {
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!skillId) return;

    const fetchSkill = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiClient.skills.getById(skillId);
        setSkill(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkill();
  }, [skillId]);

  return { skill, loading, error };
};

/**
 * Hook for creating project
 * @returns {Object} { createProject, loading, error }
 */
export const useCreateProject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createProject = async (projectData) => {
    try {
      setLoading(true);
      setError(null);
      const newProject = await apiClient.projects.create(projectData);
      return newProject;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createProject, loading, error };
};

/**
 * Hook for updating project
 * @returns {Object} { updateProject, loading, error }
 */
export const useUpdateProject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateProject = async (projectId, projectData) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await apiClient.projects.update(projectId, projectData);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProject, loading, error };
};

/**
 * Hook for deleting project
 * @returns {Object} { deleteProject, loading, error }
 */
export const useDeleteProject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteProject = async (projectId) => {
    try {
      setLoading(true);
      setError(null);
      await apiClient.projects.delete(projectId);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteProject, loading, error };
};

/**
 * Hook for creating skill
 * @returns {Object} { createSkill, loading, error }
 */
export const useCreateSkill = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSkill = async (skillData) => {
    try {
      setLoading(true);
      setError(null);
      const newSkill = await apiClient.skills.create(skillData);
      return newSkill;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createSkill, loading, error };
};

/**
 * Hook for updating skill
 * @returns {Object} { updateSkill, loading, error }
 */
export const useUpdateSkill = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSkill = async (skillId, skillData) => {
    try {
      setLoading(true);
      setError(null);
      const updated = await apiClient.skills.update(skillId, skillData);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateSkill, loading, error };
};

/**
 * Hook for deleting skill
 * @returns {Object} { deleteSkill, loading, error }
 */
export const useDeleteSkill = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteSkill = async (skillId) => {
    try {
      setLoading(true);
      setError(null);
      await apiClient.skills.delete(skillId);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteSkill, loading, error };
};
