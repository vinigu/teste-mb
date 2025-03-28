export default interface IMovie{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    adult: boolean;
    genre_ids: number[];
}