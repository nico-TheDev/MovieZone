import React from 'react'
// import { Link } from 'react-router-dom';

export default function CastCard({ person }) {
    return (
        // <Link to={`/person/${person.id}`}>
            <figure className="castCard" >
                {person.profile_path ? <img
                    className="castCard__img"
                    src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                    alt={
                        `${person.name} photo`
                    }
         
                /> : <div className="castCard__placeholder">No Image Available</div>}

                <div className="castCard__content">
                    <h3 className="castCard__name">
                        {person.name}
                    </h3>
                    <p>as</p>
                    <p className="castCard__role">
                        {person.character}
                    </p>
                 
                </div>
            </figure>
        // </Link>
    )
}
