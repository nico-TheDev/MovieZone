import React from 'react'
import Nav from './Nav';
import Featured from '../components/Featured';

export default function Header({ featured , loading}) {
    return (
        <header className='header'>
            <Nav/>
            {/* <Featured featured={featured[Math.floor(Math.random() * featured.length)]}/> */}
            <Featured featured={featured} loading={loading}/>
        </header>
    )
}
