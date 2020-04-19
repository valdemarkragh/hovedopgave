import React from 'react'

// Context providers
import { SingleShipProvider } from '../../context/shipsContext/SingleShipContext';
import { AllShipsProvider } from '../../context/shipsContext/AllShipsContext'; 
import { SpecificArrangementsProvider } from '../../context/arrangementsContext/SpecificArrangementsContext';

import {Header} from '../Header';
import {Ship} from './Ship';
import {AllShipsRow} from './AllShipsRow';
import {ShipArrangements} from './ShipArrangements';
import {ContactBtn} from '../ContactBtn';
import {Footer} from '../Footer';

export const ShipPage = ({ match }) => {

    const { id } = match.params;

    const page = 'ship';

    return (
        <div className="max-height" id="shipPage">
            <Header page={page} />
            <AllShipsProvider>
                <AllShipsRow />
            </AllShipsProvider>
            <SingleShipProvider id={id} >
                <Ship />
                <ContactBtn />
                <SpecificArrangementsProvider id={id} >
                    <ShipArrangements/>
                </SpecificArrangementsProvider>
            </SingleShipProvider>
            <Footer />
        </div>
    )

}
