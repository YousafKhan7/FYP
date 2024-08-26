import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://sits.koyeb.app/api",
  withCredentials: true,
});

export default apiClient;
