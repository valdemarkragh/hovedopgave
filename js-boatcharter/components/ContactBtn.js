import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const ContactBtn = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <Link to="/#contact" className="btn btn-primary">Kontakt os</Link>
                </div>
            </div>
        </div>
    )
}
