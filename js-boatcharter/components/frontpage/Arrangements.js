import React, {Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { AllArrangementsContext } from '../../context/arrangementsContext/AllArrangementsContext';

export const Arrangements = () => {
    const [arrangements] = useContext(AllArrangementsContext);

    return (
        <Fragment>
            <section id="arrangements" className="frontpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-5">
                            <h2>Vores arrangementer</h2>
                            <hr />
                            <small className="italic">Hvis du ønsker noget specifikt, så tag endelig kontakt til os</small>
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
                        {arrangements.map(arrangement => {
                            return (
                                <div className="card" key={arrangement.id}>
                                    <img className="card-img-top" src={arrangement.image_src} alt="Card" />
                                    <div className="card-body">
                                    <h5 className="card-title">{arrangement.title}</h5>
                                    <p className="card-text">{arrangement.short_detail}</p>
                                    <Link 
                                    to={`arrangement/${arrangement.id}/${arrangement.title}`}
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