import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AllImagesContext = createContext();

export const AllImagesProvider = props => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        
        const fetchImages = async () => {
            await axios.get(`http://vkragh.one/server/api/gallery/fetchImages.php`)
            .then(res => {
                if(res.data[0].message !== 'no records found!') {
                    setImages(res.data);
                }
            })
            .catch(error => {})
            
        };
    
        fetchImages();
    }, []);

    return <AllImagesContext.Provider value={[images]}>{props.children}</AllImagesContext.Provider>
};