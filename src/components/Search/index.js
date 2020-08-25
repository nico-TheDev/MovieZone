import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    SearchForm,
    FieldContainer as SearchField,
    SearchInput,
    SearchIcon,
    SearchLoader,
} from "./styles";
import SearchResults from "../SearchResults";
import getIcon from "../../util/getIcon";
import useSearch from "../../hooks/useSearch";

const loaderBody = (
    <>
        <div />
        <div />
        <div />
        <div />
    </>
);

export default function Search() {
    const history = useHistory();
    const [query, setQuery] = useState("");
    const [isShowing, setIsShowing] = useState(false);
    const { data, isLoading } = useSearch(query);

    const handleChange = (e) => setQuery(e.target.value);

    const showResults = () => setIsShowing(true);

    const hideResults = () => {
        setQuery("");
        setIsShowing(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${query}`);
        setQuery("");
    };

    return (
        <SearchForm
            onMouseLeave={hideResults}
            onMouseEnter={showResults}
            onSubmit={handleSubmit}
        >
            <SearchField>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    onKeyDown={showResults}
                    onFocus={showResults}
                />
                <SearchIcon>
                    <use href={getIcon("search")} />
                </SearchIcon>
                {isLoading && <SearchLoader>{loaderBody}</SearchLoader>}
            </SearchField>
            {(data.movies || data.tvShows) && (
                <SearchResults media={data} isShowing={isShowing} />
            )}
        </SearchForm>
    );
}
