import React, { createContext, useState, useEffect } from 'react';

const Providers = createContext();

const Provider = ({ children }) => {
    const [data, setdata] = useState([]);
    const [liked, setliked] = useState([]);

    useEffect(() => {
        fetch('/photos.json')
            .then(response => response.json())
            .then(data => setdata(data.photos));
    }, []);

    const toggleliked = (id) => {
        setdata((prevdata) =>
            prevdata.map((data) =>
                data.id === id ? { ...data, liked: !data.liked } : data
            )
        );

        setliked((prevliked) => {
            const isliked = prevliked.some((data) => data.id === id);
            if (isliked) {
                return prevliked.filter((data) => data.id !== id);
            } else {
                const newliked = data.find((data) => data.id === id);
                return [...prevliked, { ...newliked, liked: true }];
            }
        });
    };

    return (
        <Providers.Provider value={{ data, liked, toggleliked }}>
            {children}
        </Providers.Provider>
    );
};

export { Provider, Providers };
