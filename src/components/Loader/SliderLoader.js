import React from 'react'
import {SampleTitle, SampleSlider, SampleSlide} from './styles';

export default function SliderLoader() {
    return (
        <>
            <SampleTitle/>
            <SampleSlider>
                <SampleSlide/>
                <SampleSlide/>
                <SampleSlide/>
                <SampleSlide/>
                <SampleSlide/>
                <SampleSlide/>
            </SampleSlider>
        </>
    )
}
