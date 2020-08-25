import React from "react";
import { Link } from 'react-router-dom';


export default function GenrePill({ genre, id }) {
    return <Link to={`/genre/${genre}/${id}`} className="genrePill">{genre}</Link>;
}
