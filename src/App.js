import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
// PAGES

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import MovieProfile from "./pages/Movie";
import GenreMovies from "./pages/GenreMovies";
import SearchResults from "./pages/SearchResults";

// TODO
// Search
//draggable slider
// DIrector

function App() {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [loading, setLoading] = useState(true);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [currentTrendingPage, setCurrentTrendingPage] = useState(1);
    const [currentPopularPage, setCurrentPopularPage] = useState(1);
    const [currentTopRatedPage, setCurrentTopRatedPage] = useState(1);

    // INITIAL API CALL TO SET THE NOW PLAYING

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [trendingResponse, popularResponse,topRatedResponse,upcomingResponse] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US&page=${currentTrendingPage}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPopularPage}`
                    ),
                    fetch(`
                    https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentTopRatedPage}`),
                    fetch(`
                    https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`)
                ]);

                const [trendingData, popularData,topRatedData,upcomingData] = await Promise.all([
                    trendingResponse.json(),
                    popularResponse.json(),
                    topRatedResponse.json(),
                    upcomingResponse.json(),
                ]);
                setTrending(trendingData.results);
                setPopular(popularData.results);
                setTopRated(topRatedData.results);
                setUpcoming(upcomingData.results)
                setLoading(false);
            } catch (err) {
                console.log("Error in fetching data");
                console.log(err);
            }
        }

        getData();
    }, [currentTrendingPage, currentPopularPage,currentTopRatedPage]);

    // LOADER STOP MOUSE SCROLL
    document.body.style.overflow = loading ? "hidden" : "initial";

    return (
        <BrowserRouter>
            <Loader loading={loading} />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Home {...props} setLoading={setLoading} />
                    )}
                />
                <Route
                    path="/trending"
                    render={(props) => (
                        <Collection
                            {...props}
                            setLoading={setLoading}
                            movies={trending}
                            title={"Trending Movies"}
                            pageCount={currentTrendingPage}
                            setPage={setCurrentTrendingPage}
                        />
                    )}
                />
                <Route
                    path="/popular"
                    render={(props) => (
                        <Collection
                            {...props}
                            setLoading={setLoading}
                            movies={popular}
                            title={"Popular Movies"}
                            pageCount={currentPopularPage}
                            setPage={setCurrentPopularPage}
                        />
                    )}
                />
                <Route
                    path="/toprated"
                    render={(props) => (
                        <Collection
                            {...props}
                            setLoading={setLoading}
                            movies={topRated}
                            title={"Top Rated Movies"}
                            pageCount={currentTopRatedPage}
                            setPage={setCurrentTopRatedPage}
                        />
                    )}
                />
                <Route
                    path="/upcoming"
                    render={(props) => (
                        <Collection
                            {...props}
                            setLoading={setLoading}
                            movies={upcoming}
                            title={"Upcoming Movies"}
                        />
                    )}
                />

                <Route path="/genre/:genre/:id" component={GenreMovies} />

                <Route path="/search/:query" component={SearchResults} />

                <Route path="/movie/:id" component={MovieProfile} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
