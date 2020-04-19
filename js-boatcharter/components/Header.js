import React, {Fragment} from 'react'
import { Link as NavLink } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link';

export const Header = ({ page }) => {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="navbar-img"></div>
                    <Link className="navbar-brand" to="/">
                        Js-Boatcharter
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            {page === 'frontpage' ? 
                            <Fragment>
                                <NavLink className="nav-link" to='ships' spy={true} smooth={true}  duration={500}>Skibene</NavLink>
                                <NavLink className="nav-link" to='arrangements' spy={true} smooth={true} duration={500}>Arrangementer</NavLink>
                                <NavLink className="nav-link" to='gallery' spy={true} smooth={true} duration={500}>Galleri</NavLink>
                                <NavLink className="nav-link" to='contact' spy={true} smooth={true} duration={500}>Kontakt</NavLink>
                            </Fragment>
                            :
                            <Fragment>
                                <Link className="nav-link" to='/#ships'>Skibene</Link>
                                <Link className="nav-link" to='/#arrangements'>Arrangementer</Link>
                                <Link className="nav-link" to='/#gallery'>Galleri</Link>
                                <Link className="nav-link" to='/#contact'>Kontakt</Link>
                            </Fragment>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
