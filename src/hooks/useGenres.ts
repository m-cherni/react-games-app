import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { ApiResponse } from "../services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useFetchData<Genre>("/genres");
const useGenres = () =>
  useQuery<ApiResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getListOfData,
    staleTime: ms("24h"),
  });

export default useGenres;
