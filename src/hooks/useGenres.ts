import useFetchData from "./useFetchData";

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
