import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-sm-3 col-xs-4">
                        <h3>Js-Boatcharter</h3>
                        <ul>
                            <li>
                                Nyhavnsbroen (Nyhavn 49, 1051 København K.)
                            </li>
                            <li>
                                +45 3296 9016
                            </li>
                            <li>
                                jes@js-boatcharter.dk
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-3 col-xs-4 text-center">
                        <h3>Siderne</h3>
                        <ul>
                            <li>
                                Skibene
                            </li>
                            <li>
                                Arrangementer
                            </li>
                            <li>
                                Galleri
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-3 col-xs-4 text-right">
                        <h3>Sociale medier</h3>
                        <ul>
                            <li>
                                Facebook
                            </li>
                            <li>
                                Instagram
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
