import React, { useState, useEffect } from "react";
import icons from "../assets/icons/icons.svg";
import SearchCard from "../components/SearchCard";
import { useHistory } from "react-router-dom";

export default function Search() {
    const history = useHistory();
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState(null);
    const [displayResult, setDisplayResult] = useState(false);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);

        if (searchQuery === "") {
            setDisplayResult(false);
        } else {
            fetch(
                `https://api.themoviedb.org/3/search/movie?query="${searchQuery}"&api_key=${apiKey}&language=en-US&page=1&include_adult=false`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.results.slice(0, 6));
                    setResults(data.results.slice(0, 6));
                    setDisplayResult(true);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery !== "") {
            history.push(`/search/${searchQuery}`);
        }
    };

    return (
        <form
            className="search"
            onSubmit={handleSubmit}
            onMouseLeave={() => setDisplayResult(false)}
            onMouseEnter={() => setDisplayResult(true)}
        >
            <div className="search__field">
                <input
                    type="text"
                    className="search__input"
                    value={searchQuery}
                    placeholder="Search Movies..."
                    onChange={handleChange}
                />
                <svg className="icon search__icon">
                    <use href={`${icons}#icon-search`}></use>
                </svg>
            </div>
            <div
                className="search__results"
                style={{ display: displayResult ? "grid" : "none" }}
            >
                {results &&
                    results.map((movie) => (
                        <SearchCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </form>
    );
}
