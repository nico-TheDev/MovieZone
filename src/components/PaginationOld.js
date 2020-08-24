import React from "react";
import icons from  '../assets/icons/icons.svg';

export default function Pagination({ setPage, pageCount }) {
    const goToPrev = () => {
        setPage((prevCount) => (prevCount -= 1));
    };

    const goToNext = () => {
        setPage((prevCount) => (prevCount += 1));
    };

    return (
        <div className="pagination" style={{display:pageCount ? 'block' : 'none'}}>
            <div className="container">
                <button
                    className="pagination_btn prev btn"
                    onClick={goToPrev}
                    style={{
                        visibility: pageCount !== 1 ? "visible" : "hidden",
                    }}
                >
                    <svg className="icon">
                        <use href={`${icons}#icon-arrow-left`}></use>
                    </svg>
                </button>

                <h3 className="pagination__page">Page {pageCount}</h3>

                <button
                    className="pagination_btn next btn"
                    onClick={goToNext}
                    style={{
                        visibility: pageCount >= 1 ? "visible" : "hidden",
                    }}
                >
                    <svg className="icon">
                        <use href={`${icons}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}
