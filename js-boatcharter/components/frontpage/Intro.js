import React, {Fragment} from 'react'

export const Intro = () => {
    
    return (
        <Fragment>
            <section id="intro" className="frontpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-wrapper">
                                <div className="icon">
                                    <i className="fa fa-bed"></i>
                                </div>
                                <h4>Lækre hytter</h4>
                            </div>
                            <hr />
                            <p>Vi sørger altid for at have de bedste hytter parat til jeres tur. Hvis i ønsker noget specifikt så
					        kan vi også klare det.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-wrapper">
                                <div className="icon">
                                    <i className="fa fa-star"></i>
                                </div>
                                <h4>Vores Folk</h4>
                            </div>
                            <hr />
                            <p>Professionelle folk med års erfaring i sejlads og charter i nordeuropæisk farvand, Middelhavet såvel
					        som i Caribien sejler og håndterer vore fartøjer.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-wrapper">
                                <div className="icon">
                                    <i className="fa fa-anchor"></i>
                                </div>
                                <h4>Professionel Behandling</h4>
                            </div>
                            <hr />
                            <p>Uanset gæsternes sejladsmæssige ambitionsniveau kan vi garantere absolut
					        professionel behandling af skibe og gæster og opfyldelse af alle sejladsønsker; for motor såvel som
					        for sejl.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-wrapper">
                                <div className="icon">
                                    <i className="fa fa-life-ring"></i>
                                </div>
                                <h4>Søsikkerhed</h4>
                            </div>
                            <hr />
                            <p>Rummelighed og fine sejlegenskaber karakteriserer JS Boatcharters fartøjer. Desuden god plads på dæk,
					        om læ i den ualmindeligt hyggelige, maritime salon og i de fine kahytter under dæk.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
