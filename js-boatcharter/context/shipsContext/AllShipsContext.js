import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AllShipsContext = createContext();

export const AllShipsProvider = props => {
    const [ships, setShips] = useState([]);
    

    useEffect(() => {
        
        const fetchShips = () => {
            axios.get(`http://vkragh.one/server/api/ships/fetchShips.php`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setShips(res.data);
                } 
            })
            .catch(error => {})
            
        };
    
        fetchShips();
    }, []);

    return <AllShipsContext.Provider value={[ships]}>{props.children}</AllShipsContext.Provider>
};

