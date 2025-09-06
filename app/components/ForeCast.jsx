'use client';

import React from 'react';
import useForecastWeather from '@/app/hook/useForecastWeather';
import 'swiper/css';
import SkeletonForecast from './skeleton/SkeletonForecast';
import ForecastList from './ForecastList';

const ForeCast = () => {
    const { forecastWeatherInfo, isLoading } = useForecastWeather();

    return (
        <div className="max-h-fit overflow-hidden col-span-5 bg-[#341f54] rounded-2xl px-4 sm:px-6 py-6 sm:py-8">
            <h2 className="text-2xl font-semibold tracking-wide">
                5 Days Weather
            </h2>
            {isLoading ? (
                <SkeletonForecast />
            ) : (
                <ForecastList forecastWeatherInfo={forecastWeatherInfo} />
            )}
        </div>
    );
};

export default ForeCast;
