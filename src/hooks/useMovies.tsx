import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBNowPlaying, Movies } from '../interfaces/MovieInterface';

interface MoviesState {
    nowPlaying: Movies[];
    popular: Movies[];
    topRated: Movies[];
    upcoming: Movies[];
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)

    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })
    const consulta = "/now_playing";

    const getMovie = async () => {
        const nowPlayPromise = movieDB.get<MovieDBNowPlaying>('/movie/now_playing');
        const popularPromise = movieDB.get<MovieDBNowPlaying>('/movie/popular');
        const topRatedPromise = movieDB.get<MovieDBNowPlaying>('/movie/top_rated');
        const upComingPromise = movieDB.get<MovieDBNowPlaying>('/movie/upcoming');

        const resps = await Promise.all([
            nowPlayPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ]);

        setmoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,

        });


        setisLoading(false);

    }

    useEffect(() => {
        getMovie();
    }, [])


    return {
        ...moviesState,
        isLoading,

    }
}
