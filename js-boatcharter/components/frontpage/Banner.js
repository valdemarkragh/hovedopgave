import React from 'react'
import { Link as NavLink } from 'react-scroll';

export const Banner = () => {
    return (
        <div className="banner">
            <div className="bg-color">
                <div className="container">
                    <div className="row">
                        <div className="dark-bg">
                            <div className="col-lg-12">
                                <div className="banner-text text-center">
                                    <h1>Velkommen til JS-boatcharter</h1>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <p>JS Boatcharter arrangerer ture med forskellige type skibe, derfor kan vi næsten altid kan finde en løsning der passer til kundernes behov.</p>
                                <div className="action-btn">
                                    <NavLink activeClass="active" className="btn" to='ships' spy={true} smooth={true}  duration={500}>Gå til skibe</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
