import React, {useContext} from 'react'
import { css } from 'emotion'
import { SingleShipContext } from '../../context/shipsContext/SingleShipContext';

export const Ship = () => {

    const [ship] = useContext(SingleShipContext);

    return (
        <div className="container">
            <div className="row">
                {ship.length > 0
                    ? <div className="col-lg-12 ship-container">
                        <hr/>
                            <h2 className="my-3">{ship[0].title}</h2>
                            
                            <div
                                className={css ` background-image: url('${ship[0].image_src}'); height:300px; background-size: cover; background-position: center; border: 4px solid #3169AD;`}></div>
                            
                            <div className="ship-desc mt-3">
                                <h3>Beskrivelse</h3>
                                <hr />
                                <p className="mt-3">{ship[0].details}</p>
                            </div>
                        </div>
                    : 'No ship was found with that id'}
            </div>
        </div>
    )
    
}
