import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const Genres = () => useData<Genre>('/genres');

export default Genres;