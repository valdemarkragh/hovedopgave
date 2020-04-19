import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AllArrangementsContext = createContext();

export const AllArrangementsProvider = props => {
    const [arrangements, setArrangements] = useState([]);

    useEffect(() => {
        
        const fetchArrangements = async () => {
            await axios.get(`http://vkragh.one/server/api/arrangements/fetchArrangements.php`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setArrangements(res.data);
                }
            })
            .catch(error => {})
            
        };
    
        fetchArrangements();
    }, []);

    return <AllArrangementsContext.Provider value={[arrangements]}>{props.children}</AllArrangementsContext.Provider>
};