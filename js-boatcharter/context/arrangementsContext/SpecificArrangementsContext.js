import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const SpecificArrangementsContext = createContext();

export const SpecificArrangementsProvider = props => {

    const [arrangements, setArrangements] = useState([]);

    useEffect(() => {
        setArrangements([]);
        
        const fetchArrangements = async () => {
            await axios.get(`http://vkragh.one/server/api/arrangements/fetchArrangements.php?shipId=${props.id}`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setArrangements(res.data);
                }
            })
            .catch(error => {})
            
        };
    
        fetchArrangements();
    }, [props.id]);

    return <SpecificArrangementsContext.Provider value={[arrangements]}>{props.children}</SpecificArrangementsContext.Provider>
};