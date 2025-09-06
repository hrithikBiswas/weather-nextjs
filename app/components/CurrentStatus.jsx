import React from 'react';
import { TimestampDetails } from '@/app/utils/weatherUtils';
import { formattedTemperature } from '@/app/utils/weatherUtils';

const CurrentStatus = ({ weatherInfo }) => {
    const { formattedDate, time, dayName } = TimestampDetails(weatherInfo?.dt);
    const countryCode = weatherInfo?.sys?.country || 'BD'; // Default to Bangladesh if not available

    return (
        <div className="overflow-hidden col-span-5 lg:col-span-2 bg-[#341f54] rounded-2xl px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 rounded-lg bg-[#422b68] px-3 py-1">
                    <img className="w-4" src="/location.svg" alt="" />
                    <span>
                        {weatherInfo?.name}, {countryCode}
                    </span>
                </div>
                <div className="rounded-lg bg-[#422b68] px-3 py-1">C</div>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-0.5">
                        <h1 className="text-4xl font-semibold">{dayName}</h1>
                        <span className="tracking-wider text-gray-300">
                            {formattedDate}
                        </span>
                        <span className="tracking-wider text-gray-300">
                            {time}
                        </span>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold mb-1">
                            {formattedTemperature(
                                weatherInfo?.main?.temp,
                                'current'
                            )}
                            °C
                        </h1>
                        <h5 className="tracking-wider text-gray-300">
                            Feels Like
                        </h5>
                        <h5 className="tracking-wider text-gray-300">
                            {formattedTemperature(
                                weatherInfo?.main?.feels_like,
                                'feels_like'
                            )}
                            °
                        </h5>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-center">
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@2x.png`}
                            alt=""
                            className="w-[120px]"
                        />
                    </div>
                    <div className="">
                        <h2 className="tracking-wide text-2xl font-semibold">
                            {weatherInfo?.weather[0]?.main}
                        </h2>
                        <div className="flex gap-3 tracking-wider text-gray-300">
                            <span>
                                High:{' '}
                                {formattedTemperature(
                                    weatherInfo?.main?.temp_max,
                                    'temp_max'
                                )}
                            </span>
                            <span>
                                Low:{' '}
                                {formattedTemperature(
                                    weatherInfo?.main?.temp_min,
                                    'temp_min'
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentStatus;
