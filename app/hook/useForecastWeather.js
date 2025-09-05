import { useQuery } from '@tanstack/react-query';
import useWeatherContext from '@/app/context/useWeatherContext';
import { fetchForecastInfo } from '@/app/api/api';

const useForecastWeather = () => {
    const { searchLocation } = useWeatherContext();

    const {
        data: forecastWeatherInfo,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['forecastWeather', searchLocation],
        queryFn: async () => {
            const response = await fetchForecastInfo(searchLocation);

            return response;
        },
        retry: 1,
        refetchOnReconnect: true,
    });

    return { forecastWeatherInfo, isLoading, isError, error };
};

export default useForecastWeather;
