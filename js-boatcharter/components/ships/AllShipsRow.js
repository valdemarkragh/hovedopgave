import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AllShipsContext } from '../../context/shipsContext/AllShipsContext';

export const AllShipsRow = () => {

    const [ships] = useContext(AllShipsContext);

    return (
        <div className="container ship-row mt-3">
            <Carousel swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3500}
                    keyBoardControl={true}
                    customTransition="500ms ease-out 1s"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                        {ships.map(ship => {
                            return (
                                <div className="card" key={ship.id}>
                                    <Link to={`/ship/${ship.id}/${ship.url}`}>
                                        <img className="card-img-top" src={ship.image_src} alt="Card" />
                                    </Link>
                                </div>
                            )
                        })}
                    </Carousel>
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
  };