import React, {Fragment} from 'react'

// Context Providers
import { AllShipsProvider } from '../../context/shipsContext/AllShipsContext';
import { AllImagesProvider } from '../../context/galleryContext/AllImagesContext'; 
import { AllArrangementsProvider } from '../../context/arrangementsContext/AllArrangementsContext';

// Components
import { Header } from '../Header';
import { Banner } from './Banner';
import { Intro } from './Intro';
import { ShipCarousel } from './ShipCarousel';
import { Testimonial } from './Testimonial';
import { Images } from './Images';
import { Arrangements } from './Arrangements';
import { Contact } from './Contact';
import { Footer } from '../Footer';

export const FrontPage = () => {

    const page = 'frontpage';

    return (
        <Fragment>
            <Header page={page} />
            <AllShipsProvider>
                <Banner />
                <Intro />
                <ShipCarousel />
                <Testimonial />
                <AllImagesProvider>
                    <Images />
                </AllImagesProvider>
                <AllArrangementsProvider>
                    <Arrangements />
                </AllArrangementsProvider>
                <Contact />
            </AllShipsProvider>
            <Footer />
        </Fragment>
    )
}
