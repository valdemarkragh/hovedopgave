import React from 'react'

import { SingleArrangementProvider } from '../../context/arrangementsContext/SingleArrangementContext';

import { Header } from '../Header';
import { Arrangement } from './Arrangement';
import {ContactBtn} from '../ContactBtn';

export const ArrangementPage = ({ match }) => {

    const { id } = match.params;

    return (
        <div className="max-height" id="arrangementPage">
            <Header />
            <SingleArrangementProvider id={id}>
                <Arrangement />
            </SingleArrangementProvider>
            <ContactBtn />
        </div>
    )
}
