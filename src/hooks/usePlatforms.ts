import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useFetchData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getListOfData,
    staleTime: ms("24h"),
  });

export default usePlatforms;
