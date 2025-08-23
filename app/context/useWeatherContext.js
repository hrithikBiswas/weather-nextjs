import { useContext } from 'react';
import { WeatherContext } from './initializeContext';

const useWeatherContext = () => {
    return useContext(WeatherContext);
};

export default useWeatherContext;
