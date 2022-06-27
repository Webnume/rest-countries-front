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
  // response.data.pop();
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

// const create = async ({ title, description, content, enabled }) => {
//   const response = await apiClient.post<any>("/creatives", {
//     title,
//     description,
//     content,
//     enabled,
//   });
//   return response.data;
// };

// const update = async ({ id, ...data }) => {
//   const response = await apiClient.put<any>(`/creatives/${id}`, {
//     id,
//     ...data,
//   });
//   return response.data;
// };

// const deleteById = async (id: any) => {
//   const response = await apiClient.delete<any>(`/creatives/${id}`);
//   return response.data;
// };

// const deleteAll = async () => {
//   const response = await apiClient.delete<any>("/creatives");
//   return response.data;
// };

const CreativeService = {
  findAll,
  // findAllWithPagination,
  // findById,
  findByCode,
  findByListOfCodes,
  // findByTitle,
  // create,
  // update,
  // deleteById,
  // deleteAll,
};
export default CreativeService;
