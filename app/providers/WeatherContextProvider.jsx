'use client';

import { useState } from 'react';
import { WeatherContext } from '@/app/context/initializeContext';

const WeatherContextProvider = ({ children }) => {
    const [searchLocation, setSearchLocation] = useState('dhaka');
    return (
        <WeatherContext.Provider
            value={{
                searchLocation,
                setSearchLocation,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;
