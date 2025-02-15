import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Submit health profile
export const submitHealthProfile = async (profileData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/health-profile/submit`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error submitting health profile:', error);
    throw error;
  }
};

// Run clustering
export const runClustering = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/cluster/run-clustering`);
    return response.data;
  } catch (error) {
    console.error('Error running clustering:', error);
    throw error;
  }
};

// Get recommendations for a user
export const getRecommendations = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/cluster/recommendations/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};