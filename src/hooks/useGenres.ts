import useFetchData from "./useFetchData";

export interface Genre {
  id: string;
  name: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
