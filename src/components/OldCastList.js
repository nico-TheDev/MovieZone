import React from 'react'
import CastCard from './CastCard';

export default function CastList({ casts }) {
    return (
        <div className='castList'>
            <h2 className="castList__title mb-2 text-center"> CASTS </h2>
            <div className="container">
                    {casts.map(cast => <CastCard key={cast.id} person={cast}/>)}
            </div>
        </div>
    )
}
