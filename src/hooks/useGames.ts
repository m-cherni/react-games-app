import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { ApiResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// const useGames = (
//   selectedGenre: Genre | null,
//   selectedPlatform: Platform | null,
//   selectedSort: string,
//   searchString: string
// ) =>
//   useFetchData<Game>(
//     "/games",
//     {
//       params: {
//         genres: selectedGenre?.id,
//         platforms: selectedPlatform?.id,
//         ordering: selectedSort,
//         search: searchString
//       },
//     },
//     [selectedGenre?.id, selectedPlatform?.id, selectedSort, searchString]
//   );

const apiClient = new ApiClient<Game>("/games");

const useGames = (
  selectedGenre: number | null,
  selectedPlatform: number | null,
  selectedSort: string,
  searchString: string
) =>
  useInfiniteQuery<ApiResponse<Game>, Error>({
    queryKey: [
      "games",
      selectedGenre,
      selectedPlatform,
      selectedSort,
      searchString,
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getListOfData({
        params: {
          genres: selectedGenre,
          parent_platforms: selectedPlatform,
          ordering: selectedSort,
          search: searchString,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
