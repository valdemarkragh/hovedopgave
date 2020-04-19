import React, {Fragment, useContext} from 'react'
import Gallery from 'react-grid-gallery';

import { AllImagesContext } from '../../context/galleryContext/AllImagesContext';

export const Images = () => {

    const [images] = useContext(AllImagesContext);
    return (
        <Fragment>
            <section id="gallery" className="frontpage-section">
                <div className="bg-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 flex">
                                <h2>Vi tager <span className="text-underline">altid</span> flotte billeder fra vores sejlture.</h2>
                                <hr />
                                <p>Her kan du blandt andet se et udpluk af vores billeder. Vi hjælper naturligvis vores passagerer med at tage de bedste billeder fra deres tur med os.</p>
                                <p>Ønsker du at få et bestemt billede fra din tur, så skal du blot spørge os før vi tager afsted, og så hjælper vi selvfølgelig med dette.</p>
                            </div>
                            <div className="col-lg-7">
                                <Gallery images={images} maxRows={2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
