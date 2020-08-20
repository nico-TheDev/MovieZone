import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Slider from "../components/Slider";
import Footer from "../layout/Footer";

export default function Home({ setLoading }) {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);


    // INITIAL API CALL TO SET THE NOW PLAYING

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [
                    nowPlayingResponse,
                    trendingResponse,
                    popularResponse,
                ] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=3`
                    ),
                ]);

                const [
                    nowPlayingData,
                    trendingData,
                    popularData,
                ] = await Promise.all([
                    nowPlayingResponse.json(),
                    trendingResponse.json(),
                    popularResponse.json(),
                ]);
                setNowPlaying(nowPlayingData.results);
                setTrending(trendingData.results);
                setPopular(popularData.results);
                setLoading(false);
            } catch (err) {
                console.log("Error in fetching data");
                console.log(err);
            }
        }

        getData();
    }, []);

    document.title = `MovieZone - Search for movies around the globe`;
    return (
        <>
            <Header setLoading={setLoading} />
            <Slider title={"Now Playing"} movies={nowPlaying} />
            <Slider title={"Popular"} movies={popular} />
            <Slider title={"Trending"} movies={trending} />
        </>
    );
}
