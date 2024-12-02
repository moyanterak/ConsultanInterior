import axios from 'axios';

const API_URL = 'https://your-backend-api-url.com';

export const getServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

export const createConsultationRequest = async (formData: any) => {
  await axios.post(`${API_URL}/consultation-request`, formData);
};

export const getProjectStatus = async () => {
  const response = await axios.get(`${API_URL}/project-status`);
  return response.data;
};
