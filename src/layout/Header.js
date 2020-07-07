import React from 'react'
import Nav from './Nav';
import Featured from '../components/Featured';

export default function Header({ setLoading }) {
    return (
        <header className='header'>
            <Nav position={'absolute'}/>
            {/* <Featured featured={featured[Math.floor(Math.random() * featured.length)]}/> */}
            <Featured setLoading={setLoading}/>
        </header>
    )
}
