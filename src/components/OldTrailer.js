import React, { useState, useEffect } from "react";
import icons from "../assets/icons/icons.svg";

export default function Trailer({ id, open, setOpenTrailer }) {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [trailer, setTrailer] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchTrailer() {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
            );
            const data = await response.json();

            if (data.results) {
                setTrailer(data.results[0]);
                setLoading(false);
            }
        }
        fetchTrailer();
    }, [open]);

    const trailerDisplay = () => {
        let trailerComp;

        if (loading) {
            trailerComp = (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            );
        } else {
            trailerComp = trailer ? (
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    frameBorder="0"
                    className="trailer__video"
                ></iframe>
            ) : (
                <div className="text-center trailer__container ">
                    <h2 className="noTrailer">No Trailer Found</h2>
                </div>
            );
        }

        return trailerComp;
    };

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
    );
}
