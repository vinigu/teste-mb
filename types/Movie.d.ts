export interface IMovie{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    adult: boolean;
    genre_ids?: number[];
}

export interface IMoviePage {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    imdb_id: string;
    vote_average: number;
    adult: boolean;
    genres: {
        id: number;
        name: string;
    }[];
    release_date: string;
    runtime: number;
    tagline: string | null;
    homepage: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    revenue: number;
    budget: number;
    similar: IMovieCard[];
    recommendations: IMovieCard[];
    videos?: {
        results: {
            id: string;
            key: string;
            name: string;
            site: string;
            type: string;
        }[];
    };
    credits?: {
        cast: {
            id: number;
            name: string;
            character: string;
            profile_path: string | null;
        }[];
        crew: {
            id: number;
            name: string;
            job: string;
            profile_path: string | null;
        }[];
    };
    images?: {
        backdrops: {
            file_path: string;
            width: number;
            height: number;
        }[];
        posters: {
            file_path: string;
            width: number;
            height: number;
        }[];
    };

}