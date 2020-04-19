import React, {Fragment, useContext} from 'react'

import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AllShipsContext } from '../../context/shipsContext/AllShipsContext';

export const ShipCarousel = () => {
    const [ships] = useContext(AllShipsContext);

    return (
        <Fragment>
            <div className="section-image waves"></div>
            <section id="ships" className="frontpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-1 text-center">
                            <h2>Vores skibe</h2>
                            <hr className="mt-4"/>
                        </div>
                    </div>
                    <Carousel swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    customTransition="ease-out 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                        {ships.map(ship => {
                            return (
                                <div className="card" key={ship.id}>
                                    <img className="card-img-top" src={ship.image_src} alt="Card" />
                                    <div className="card-body">
                                    <h5 className="card-title">{ship.title}</h5>
                                    <p className="card-text">{ship.short_detail}</p>
                                    <Link 
                                    to={`ship/${ship.id}/${ship.url}`}
                                    className="btn btn-primary">
                                        Læs mere
                                    </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                
            </section>
        </Fragment>
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
      items: 3
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