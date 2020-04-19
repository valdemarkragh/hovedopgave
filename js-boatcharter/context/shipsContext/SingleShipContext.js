import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SingleShipContext = createContext();

export const SingleShipProvider = props => {
    const [ship, setShip] = useState([]);

    useEffect(() => {
        
        const fetchShip = async () => {
            await axios.get(`http://vkragh.one/server/api/ships/fetchSingleShip.php?id=${props.id}`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setShip(res.data);
                } 
            })
            .catch(error => {})
            
        };
    
        fetchShip();
    }, [props.id]);

    return <SingleShipContext.Provider value={[ship]}>{props.children}</SingleShipContext.Provider>
};

