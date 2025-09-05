'use client';

import useWeather from '@/app/hook/useWeather';
import CurrentStatus from '@/app/components/CurrentStatus';
import TodaysHighlight from '@/app/components/TodaysHighlight';
import ForeCast from '@/app/components/ForeCast';
import SkeletonCurrentStatus from '@/app/components/skeleton/SkeletonCurrentStatus';
import SkeletonTodaysHighlight from '@/app/components/skeleton/SkeletonTodaysHighlight';

const WeatherOverview = () => {
    const { weatherInfo, isLoading, isError, error } = useWeather();

    if (isError) return <div>Error: {error.message}</div>;
    if (weatherInfo?.cod === '404') return <div>Location not found</div>;

    return (
        <div className="grid grid-cols-5 gap-4 sm:gap-6">
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
            <ForeCast />
        </div>
    );
};

export default WeatherOverview;
