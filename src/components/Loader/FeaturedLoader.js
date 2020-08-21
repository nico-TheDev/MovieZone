import React from 'react'
import { FeaturedLoader as Loader, FeaturedBottom } from './styles';

export default function FeaturedLoader() {
    return (
        <Loader>
            <FeaturedBottom>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </FeaturedBottom>
        </Loader>
    )
}
