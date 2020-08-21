import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Nav from "./components/layout/Nav/";
import './assets/css/custom.css';

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                
            </Switch>
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