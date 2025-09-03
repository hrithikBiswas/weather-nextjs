import { useQuery } from '@tanstack/react-query';
import useWeatherContext from '@/app/context/useWeatherContext';
import { fetchWeatherInfo } from '@/app/api/api';

const useWeather = () => {
    const { searchLocation } = useWeatherContext();
    const {
        data: weatherInfo,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['weather', searchLocation],
        queryFn: async () => {
            const response = await fetchWeatherInfo(searchLocation);

            return response;
        },
        retry: 1,
        refetchOnReconnect: true,
    });

    return { weatherInfo, isLoading, isError, error };
};

export default useWeather;
