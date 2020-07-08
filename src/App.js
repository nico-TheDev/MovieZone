import React, { useState, useEffect } from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Loader from "./components/Loader";
// PAGES

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import MovieProfile from "./pages/Movie";

function App() {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [loading, setLoading] = useState(true);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [currentTrendingPage, setCurrentTrendingPage] = useState(1);
    const [currentPopularPage, setCurrentPopularPage] = useState(1);

    // INITIAL API CALL TO SET THE NOW PLAYING

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const [trendingResponse, popularResponse] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US&page=${currentTrendingPage}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPopularPage}`
                    ),
                ]);

                const [trendingData, popularData] = await Promise.all([
                    trendingResponse.json(),
                    popularResponse.json(),
                ]);
                setTrending(trendingData.results);
                setPopular(popularData.results);
                setLoading(false);
            } catch (err) {
                console.log("Error in fetching data");
                console.log(err);
            }
        }

        getData();
    }, [currentTrendingPage,currentPopularPage]);

    // LOADER STOP MOUSE SCROLL
    document.body.style.overflow = loading ? "hidden" : "initial";

    return (
        <BrowserRouter>
            <Loader loading={loading} />

            <Route
                exact
                path="/"
                render={(props) => <Home {...props} setLoading={setLoading} />}
            />
            <Route
                path="/trending"
                render={(props) => (
                    <Collection
                        {...props}
                        setLoading={setLoading}
                        movies={trending}
                        title={"Trending Movies"}
                        pageCount ={currentTrendingPage}
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
                        pageCount ={currentPopularPage}
                        setPage={setCurrentPopularPage}
                    />
                )}
            />
            <Switch>
                <Route exact path='/movie/:id' component={MovieProfile}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
