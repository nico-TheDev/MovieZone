import React from 'react'

export default function Trailer() {
    return (
        <div className={open ? "trailer showTrailer" : "trailer"} onClick={() => console.log('PLAY')}>
        <div
            className="trailer__container"
        >
            {trailerDisplay()}
            <button
                className="trailer__btn"
                onClick={() => setOpenTrailer(false)}
            >
                <svg className="icon">
                    <use href={`${icons}#icon-close-outline`}></use>
                </svg>
            </button>
        </div>
    </div>
    )
}
