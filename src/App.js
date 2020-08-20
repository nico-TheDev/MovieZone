import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
// PAGES

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import MovieProfile from "./pages/Movie";
import GenreMovies from "./pages/GenreMovies";
import SearchResults from "./pages/SearchResults";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import AppContextProvider from "./contexts/AppContext";

// TODO
// Search
//draggable slider
// DIrector

function App() {
    useEffect(() => {
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
            } catch (err) {
                console.log("Error in fetching data");
                console.log(err);
            }
        }

        getData();
    }, [currentTrendingPage, currentPopularPage, currentTopRatedPage]);

    // LOADER STOP MOUSE SCROLL
    document.body.style.overflow = loading ? "hidden" : "initial";

    return (
        <AppContextProvider>
            <BrowserRouter>
                <Nav />
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
                        path="/list/trending"
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
                        path="/list/popular"
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
                        path="/list/toprated"
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
                        path="/list/upcoming"
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
                <Footer />
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;
