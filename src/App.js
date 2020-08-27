import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav/";
import Footer from "./components/layout/Footer/";
import HomePage from "./components/pages/HomePage";

import MoviePage from "./components/pages/MoviePage";
import TVShowPage from "./components/pages/TVShowPage";
import PersonPage from "./components/pages/PersonPage";
import TrendingMovies from "./components/pages/TrendingMoviesList";
import UpcomingMovies from "./components/pages/UpcomingMoviesList";
import TodayTVList from "./components/pages/TodayTVList";
import AiringTVList from "./components/pages/AiringTVList";
import PopularTV from "./components/pages/PopularList/PopularTV";
import PopularMovies from "./components/pages/PopularList/PopularMovies";
import TopRatedTV from "./components/pages/TopRatedList/TopRatedTV";
import TopRatedMovies from "./components/pages/TopRatedList/TopRatedMovies";
import GenreList from "./components/pages/GenreList";
import SearchPageResult from "./components/pages/SearchPageResult";

import "./assets/css/custom.css";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/search/:query" component={SearchPageResult}/>
                <Route path="/movie/:id" component={MoviePage} />
                <Route path="/tv/:id" component={TVShowPage} />
                <Route path="/person/:id" component={PersonPage}/>
                <Route path="/list/tv/popular" component={PopularTV} />
                <Route path="/list/movie/popular" component={PopularMovies} />
                <Route path="/list/tv/toprated" component={TopRatedTV} />
                <Route path="/list/tv/today" component={TodayTVList} />
                <Route path="/list/tv/airing" component={AiringTVList} />
                <Route path="/list/movie/toprated" component={TopRatedMovies} />
                <Route path="/list/movie/upcoming" component={UpcomingMovies} />
                <Route path="/list/movie/trending" component={TrendingMovies} />
                <Route path="/genre/:genre/:type/:id" component={GenreList}/>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
