import React from 'react'
import icons from  '../assets/icons/icons.svg';

export default function Search() {
    return (
        <form className='search'>
            <input type="text" className="search__input" placeholder='Search Movies...'/>
            <svg className="icon search__icon">
                <use href={`${icons}#icon-search`}></use>
            </svg>
        </form>
    )
}
