import useFetchData from "./useFetchData";


interface Platform {
    id: string;
    name: string;
    slug: string;
}

const usePlatforms = () => useFetchData<Platform>('/platforms/lists/parents');

export default usePlatforms;