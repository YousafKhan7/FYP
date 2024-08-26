import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://sits-fyp-2024.koyeb.app/api",
  withCredentials: true,
});

export default apiClient;
