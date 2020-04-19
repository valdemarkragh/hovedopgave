import React, {useContext} from 'react'
import { css } from 'emotion'

import { SingleArrangementContext } from '../../context/arrangementsContext/SingleArrangementContext';

export const Arrangement = () => {

    const [arrangement] = useContext(SingleArrangementContext);

    return (
        <div className="container">
            <div className="row">
                {arrangement.length > 0
                    ? <div className="col-lg-12 arrangement-container">
                            <h2 className="my-3">{arrangement[0].title}</h2>
                            
                            <div
                                className={css ` background-image: url('${arrangement[0].image_src}'); height:300px; background-size: cover; background-position: center; border: 4px solid #3169AD;`}></div>
                            
                            <div className="arrangement-desc mt-3">
                                <h3>Beskrivelse</h3>
                                <hr />
                                <p className="mt-3">{arrangement[0].details}</p>
                            </div>
                        </div>
                    : 'No arrangement was found with that id'}
            </div>
        </div>
    )
}
