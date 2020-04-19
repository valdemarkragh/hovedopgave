import React, {Fragment} from 'react'

import { Map } from '../googleMaps/Map';

export const Contact = () => {
    return (
        <Fragment>
            <div className="section-image grey"></div>
            <section id="contact" className="frontpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center my-4">
                            <h2>Kontakt os</h2>
                            <hr className="mt-4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control" placeholder="Navn" name="name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Email" name="email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Besked" rows="5" name="message"></textarea>
                            </div>
                            <button className="btn btn-primary">Send besked</button>
                        </div>
                        <div className="col-lg-6">
                            <Map />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
