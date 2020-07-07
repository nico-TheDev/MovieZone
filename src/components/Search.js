import React from 'react'

export default function Search() {
    return (
        <form className='search'>
            <input type="text" className="search__input" placeholder='Search Movies...'/>
            <svg className="icon search__icon">
                <use href='./assets/icons/icons.svg#icon-search'></use>
            </svg>
        </form>
    )
}
