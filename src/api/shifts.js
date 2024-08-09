import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getShifts = async () => {
  try {
    const response = await axios.get(`${API_URL}/shifts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shifts:', error);
    throw error;
  }
};

export const createShifts = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/shifts`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating shifts:', error);
    throw error;
  }
};
