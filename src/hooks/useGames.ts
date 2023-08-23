import useFetchData from "./useFetchData";
import { Genre } from "./useGenres";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: string,
  searchString: string
) =>
  useFetchData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort,
        search: searchString
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSort, searchString]
  );

export default useGames;
