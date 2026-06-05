/**
 * Portfolio API Client
 * 
 * A helper module for frontend to interact with the backend API
 * 
 * Usage in React:
 * import { apiClient } from './api/client.js';
 * 
 * // Fetch projects
 * const projects = await apiClient.getProjects();
 * 
 * // Create project
 * const newProject = await apiClient.createProject({
 *   title: 'My Project',
 *   description: 'Description',
 *   link: 'https://github.com/...',
 *   file: fileObject // optional
 * });
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Error handler
const handleError = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || error.message || 'API Error');
  }
  return response;
};

// ==================== PROJECTS ====================

/**
 * Get all projects
 * @returns {Promise<Array>} Array of projects
 */
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching projects:', error.message);
    throw error;
  }
};

/**
 * Get single project by ID
 * @param {string} projectId - MongoDB ObjectId of project
 * @returns {Promise<Object>} Project object
 */
export const getProjectById = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`);
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching project:', error.message);
    throw error;
  }
};

/**
 * Create new project
 * @param {Object} data - Project data { title, description, link, file? }
 * @returns {Promise<Object>} Created project
 */
export const createProject = async (data) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('link', data.link);
    
    if (data.file) {
      formData.append('thumbnail_image', data.file);
    }

    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      body: formData
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error creating project:', error.message);
    throw error;
  }
};

/**
 * Update existing project
 * @param {string} projectId - MongoDB ObjectId of project
 * @param {Object} data - Updated data { title, description, link, file? }
 * @returns {Promise<Object>} Updated project
 */
export const updateProject = async (projectId, data) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('link', data.link);
    
    if (data.file) {
      formData.append('thumbnail_image', data.file);
    }

    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'PUT',
      body: formData
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error updating project:', error.message);
    throw error;
  }
};

/**
 * Delete project
 * @param {string} projectId - MongoDB ObjectId of project
 * @returns {Promise<Object>} Success response
 */
export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
      method: 'DELETE'
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error deleting project:', error.message);
    throw error;
  }
};

// ==================== SKILLS ====================

/**
 * Get all skills
 * @returns {Promise<Array>} Array of skills
 */
export const getSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`);
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching skills:', error.message);
    throw error;
  }
};

/**
 * Get single skill by ID
 * @param {string} skillId - MongoDB ObjectId of skill
 * @returns {Promise<Object>} Skill object
 */
export const getSkillById = async (skillId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/${skillId}`);
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching skill:', error.message);
    throw error;
  }
};

/**
 * Create new skill
 * @param {Object} data - Skill data { name, proficiency?, description?, file? }
 * @returns {Promise<Object>} Created skill
 */
export const createSkill = async (data) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    
    if (data.proficiency) {
      formData.append('proficiency', data.proficiency);
    }
    
    if (data.description) {
      formData.append('description', data.description);
    }
    
    if (data.file) {
      formData.append('icon', data.file);
    }

    const response = await fetch(`${API_BASE_URL}/skills`, {
      method: 'POST',
      body: formData
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error creating skill:', error.message);
    throw error;
  }
};

/**
 * Update existing skill
 * @param {string} skillId - MongoDB ObjectId of skill
 * @param {Object} data - Updated data { name?, proficiency?, description?, file? }
 * @returns {Promise<Object>} Updated skill
 */
export const updateSkill = async (skillId, data) => {
  try {
    const formData = new FormData();
    
    if (data.name) {
      formData.append('name', data.name);
    }
    
    if (data.proficiency) {
      formData.append('proficiency', data.proficiency);
    }
    
    if (data.description) {
      formData.append('description', data.description);
    }
    
    if (data.file) {
      formData.append('icon', data.file);
    }

    const response = await fetch(`${API_BASE_URL}/skills/${skillId}`, {
      method: 'PUT',
      body: formData
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error updating skill:', error.message);
    throw error;
  }
};

/**
 * Delete skill
 * @param {string} skillId - MongoDB ObjectId of skill
 * @returns {Promise<Object>} Success response
 */
export const deleteSkill = async (skillId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/${skillId}`, {
      method: 'DELETE'
    });
    
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Error deleting skill:', error.message);
    throw error;
  }
};

// ==================== HEALTH CHECK ====================

/**
 * Check if backend is running
 * @returns {Promise<Object>} Health status
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    await handleError(response);
    return await response.json();
  } catch (error) {
    console.error('❌ Backend is not responding:', error.message);
    throw error;
  }
};

// ==================== GROUPED EXPORTS ====================

/**
 * Grouped API client for easier imports
 * Usage: import { apiClient } from './api/client.js';
 */
export const apiClient = {
  // Projects
  projects: {
    getAll: getProjects,
    getById: getProjectById,
    create: createProject,
    update: updateProject,
    delete: deleteProject
  },
  
  // Skills
  skills: {
    getAll: getSkills,
    getById: getSkillById,
    create: createSkill,
    update: updateSkill,
    delete: deleteSkill
  },
  
  // Health
  checkHealth
};

/**
 * Default export for convenience
 * Usage: import api from './api/client.js';
 */
export default apiClient;
