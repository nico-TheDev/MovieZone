import React from "react";
import {
    SearchForm,
    FieldContainer as SearchField,
    SearchInput,
    SearchIcon,
    SearchLoader,
    SearchResults,
} from "./styles";
import getIcon from "../../util/getIcon";

export default function Search() {
    return (
        <SearchForm>
            <SearchField>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                />
                <SearchIcon>
                    <use href={getIcon("search")} />
                </SearchIcon>
                <SearchLoader show={false}>
                    <div />
                    <div />
                    <div />
                    <div />
                </SearchLoader>
            </SearchField>
            <SearchResults>{/* ADD IF THERE ARE RESULTS */}</SearchResults>
        </SearchForm>
    );
}
