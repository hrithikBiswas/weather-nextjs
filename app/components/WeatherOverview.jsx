'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchWeatherInfo, fetchCountryName } from '@/app/api/api';
import useWeatherContext from '@/app/context/useWeatherContext';

import CurrentStatus from '@/app/components/CurrentStatus';
import TodaysHighlight from '@/app/components/TodaysHighlight';
import SkeletonCurrentStatus from './skeleton/SkeletonCurrentStatus';
import SkeletonTodaysHighlight from './skeleton/SkeletonTodaysHighlight';

const WeatherOverview = () => {
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
        refetchOnReconnect: true, // disable auto-refetch when reconnected
    });

    if (isError) return <div>Error: {error.message}</div>;
    if (weatherInfo?.cod === '404') return <div>Location not found</div>;

    return (
        <div className="grid grid-cols-5 gap-6">
            {isLoading ? (
                <SkeletonCurrentStatus />
            ) : (
                <CurrentStatus weatherInfo={weatherInfo} />
            )}
            {isLoading ? (
                <SkeletonTodaysHighlight />
            ) : (
                <TodaysHighlight weatherInfo={weatherInfo} />
            )}
        </div>
    );
};

export default WeatherOverview;
