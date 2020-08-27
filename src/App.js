import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav/";
import Footer from "./components/layout/Footer/";
import HomePage from "./components/pages/HomePage";

import MoviePage from "./components/pages/MoviePage";
import TVShowPage from "./components/pages/TVShowPage";
import PersonPage from "./components/pages/PersonPage";
import TrendingMovies from "./components/pages/TrendingMoviesPage";
import UpcomingMovies from "./components/pages/UpcomingMoviesPage";
import TodayTV from "./components/pages/TodayTVPage";
import AiringTV from "./components/pages/AiringTVPage";
import PopularTV from "./components/pages/PopularList/PopularTVPage";
import PopularMovies from "./components/pages/PopularList/PopularMoviesPage";
import TopRatedTV from "./components/pages/TopRatedList/TopRatedTVPage";
import TopRatedMovies from "./components/pages/TopRatedList/TopRatedMoviesPage";
import GenrePage from "./components/pages/GenrePage";
import SearchResultsPage from "./components/pages/SearchResultsPage";

import "./assets/css/custom.css";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/search/:query" component={SearchResultsPage}/>
                <Route path="/movie/:id" component={MoviePage} />
                <Route path="/tv/:id" component={TVShowPage} />
                <Route path="/person/:id" component={PersonPage}/>
                <Route path="/list/tv/popular" component={PopularTV} />
                <Route path="/list/tv/toprated" component={TopRatedTV} />
                <Route path="/list/tv/today" component={TodayTV} />
                <Route path="/list/tv/airing" component={AiringTV} />
                <Route path="/list/movie/popular" component={PopularMovies} />
                <Route path="/list/movie/toprated" component={TopRatedMovies} />
                <Route path="/list/movie/upcoming" component={UpcomingMovies} />
                <Route path="/list/movie/trending" component={TrendingMovies} />
                <Route path="/genre/:genre/:type/:id" component={GenrePage}/>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
