import React from 'react'

export default function Trailer() {
    return (
        <div className='trailer'>
            <div className="trailer__container">
                <iframe src={`https://www.youtube.com/embed/382BTxLNrow`} frameborder="0" className='trailer__video'></iframe>
                <button className="trailer__btn">
                    <svg className="icon">
                        <use href='./assets/icons/icons.svg#icon-close-outline'></use>
                    </svg>
                </button>
            </div>
        </div>
    )
}
