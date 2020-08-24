import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav/";
import Footer from "./components/layout/Footer/";
import Home from "./components/pages/Home";

import Movie from "./components/pages/Movie/";
import PopularTV from "./components/pages/PopularList/PopularTV";
import PopularMovies from "./components/pages/PopularList/PopularMovies";
import TopRatedTV from "./components/pages/TopRatedList/TopRatedTV";
import TopRatedMovies from "./components/pages/TopRatedList/TopRatedMovies";

import "./assets/css/custom.css";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:type/:id" component={Movie} />
                <Route path="/list/tv/popular" component={PopularTV} />
                <Route path="/list/movie/popular" component={PopularMovies} />
                <Route path="/list/tv/toprated" component={TopRatedTV} />
                <Route path="/list/movie/toprated" component={TopRatedMovies} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

/*

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
*/
