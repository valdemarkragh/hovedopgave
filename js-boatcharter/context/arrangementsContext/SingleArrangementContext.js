import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SingleArrangementContext = createContext();

export const SingleArrangementProvider = props => {
    const [arrangement, setArrangement] = useState([]);

    useEffect(() => {
        
        const fetchShip = async () => {
            await axios.get(`http://vkragh.one/server/api/arrangements/fetchSingleArrangement.php?id=${props.id}`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setArrangement(res.data);
                } 
            })
            .catch(error => {})
            
        };
    
        fetchShip();
    }, [props.id]);

    return <SingleArrangementContext.Provider value={[arrangement]}>{props.children}</SingleArrangementContext.Provider>
};