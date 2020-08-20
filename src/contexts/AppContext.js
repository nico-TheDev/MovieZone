import React, { createContext, useReducer, useEffect } from "react";

export const AppContext = createContext();


async function getData() {
    try {
        const [
            trendingResponse,
            popularResponse,
            topRatedResponse,
            upcomingResponse,
        ] = await Promise.all([
            fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${currentTrendingPage}`
            ),
            fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${currentPopularPage}`
            ),
            fetch(`
            https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${currentTopRatedPage}`),
            fetch(`
            https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US`),
        ]);

        const [
            trendingData,
            popularData,
            topRatedData,
            upcomingData,
        ] = await Promise.all([
            trendingResponse.json(),
            popularResponse.json(),
            topRatedResponse.json(),
            upcomingResponse.json(),
        ]);
        setTrending(trendingData.results);
        setPopular(popularData.results);
        setTopRated(topRatedData.results);
        setUpcoming(upcomingData.results);
        setLoading(false);
    } catch (err) {
        console.log("Error in fetching data");
        console.log(err);
    }
}
export default function AppContextProvider({ children }) {

    const initialState = {
        loading: true,
        popular:  [],
        trending: [],
        topRated: [],
        upcoming: [],
        currentTrendingPage: 1,
        currentPopularPage:  1,
        currentTopRatedPage: 1,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getData();
    }, [])

    return <AppContext.Provider>{children}</AppContext.Provider>;
}
    