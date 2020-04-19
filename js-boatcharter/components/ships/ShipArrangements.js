import React, {useContext, Fragment} from 'react'
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

import {SpecificArrangementsContext} from '../../context/arrangementsContext/SpecificArrangementsContext';
import {SingleShipContext} from '../../context/shipsContext/SingleShipContext';

export const ShipArrangements = () => {

    const [arrangements] = useContext(SpecificArrangementsContext);
    const [ship] = useContext(SingleShipContext);

    return (
        <div className="container my-3 mb-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="arrangements-desc">
                        <h5 className="italic my-4">Vi anbefaler disse arrangementer til {ship.length > 0 && ship[0].title}</h5>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="row">
                {arrangements.length > 0
                    ? <Fragment>
                            {arrangements.map(arrangement => {
                                return (
                                    <div className="col-lg-4 ship-arrangements" key={arrangement.id}>
                                        <Card>
                                            <Card.Img variant="top" src={arrangement.image_src}/>
                                            <Card.Body>
                                                <h5>{arrangement.title}</h5>
                                                <hr/> {arrangement.short_detail}
                                            </Card.Body>
                                            <Link
                                                to={`/arrangement/${arrangement.id}/${arrangement.title}`}
                                                className="btn btn-primary">Læs mere</Link>
                                        </Card>
                                    </div>
                                )
                            })}
                        </Fragment>
                    : ''}
            </div>
        </div>
    )
}
