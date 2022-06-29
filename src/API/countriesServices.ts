import axios from "axios";

export const CREATIVE_BASE_URL = "https://restcountries.com/v3.1";

const apiClient = axios.create({
  baseURL: CREATIVE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get(`/all`);
  return response.data;
};

const findByCode = async (code: any) => {
  const response = await apiClient.get(`/alpha/${code}`);
  return response.data;
};

const findByListOfCodes = async (codes: any) => {
  const response = await apiClient.get(`/alpha?codes=${codes}`);
  return response.data;
};



const CreativeService = {
  findAll,
  findByCode,
  findByListOfCodes,
};
export default CreativeService;
