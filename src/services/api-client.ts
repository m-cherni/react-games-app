import axios, { AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8141d26b1fa74bbe9935c14fc9c29f34",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getListOfData = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<ApiResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
