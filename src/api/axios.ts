import axios from "axios";


const axiosInstacne = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

axiosInstacne.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axiosInstacne.interceptors.response.use(
  (response) => response,
  (error) => {
    //console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstacne;