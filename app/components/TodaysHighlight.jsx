import React from 'react';
import {
    convertMetersToKilometers,
    TimestampDetails,
} from '@/app/utils/weatherUtils';

const TodaysHighlight = ({ weatherInfo }) => {
    const { time: sunrise } = TimestampDetails(weatherInfo?.sys?.sunrise);
    const { time: sunset } = TimestampDetails(weatherInfo?.sys?.sunset);
    const { time: currentTime } = TimestampDetails(weatherInfo?.dt);

    return (
        <div className="max-h-fit col-span-3 bg-[#341f54] rounded-2xl px-6 py-8">
            <h2 className="text-2xl font-semibold tracking-wide">
                Today's Highlight
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 bg-[#3f2866] rounded-xl p-4">
                        <div className="flex gap-2">
                            <img
                                className="w-6"
                                src="/solar_wind-linear.svg"
                                alt="wind"
                            />
                            <h5 className="tracking-wide">Wind Status</h5>
                        </div>
                        <h3 className="text-xl font-semibold">
                            {weatherInfo?.wind?.speed}{' '}
                            <span className="text-sm font-normal">km/h</span>
                        </h3>
                        <h6 className="text-sm font-normal">{currentTime}</h6>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#3f2866] rounded-xl p-4">
                        <div className="flex gap-2">
                            <img
                                className="w-6"
                                src="/carbon_humidity.svg"
                                alt="wind"
                            />
                            <h5 className="tracking-wide">Humidity</h5>
                        </div>
                        <h3 className="text-xl font-semibold">
                            {weatherInfo?.main?.humidity}{' '}
                            <span className="text-sm font-normal">&#37;</span>
                        </h3>
                        <h6 className="text-sm font-normal">{currentTime}</h6>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#3f2866] rounded-xl p-4">
                        <div className="flex gap-2">
                            <img
                                className="w-6"
                                src="/cloudness.png"
                                alt="wind"
                            />
                            <h5 className="tracking-wide">Cloudiness</h5>
                        </div>
                        <h3 className="text-xl font-semibold">
                            {weatherInfo?.clouds?.all}{' '}
                            <span className="text-sm font-normal">&#37;</span>
                        </h3>
                        <h6 className="text-sm font-normal">{currentTime}</h6>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#3f2866] rounded-xl p-4">
                        <div className="flex gap-2">
                            <img
                                className="w-6"
                                src="/ri_eye-line.svg"
                                alt="wind"
                            />
                            <h5 className="tracking-wide">Visibility</h5>
                        </div>
                        <h3 className="text-xl font-semibold">
                            {convertMetersToKilometers(weatherInfo?.visibility)}{' '}
                            <span className="text-sm font-normal">km/h</span>
                        </h3>
                        <h6 className="text-sm font-normal">{currentTime}</h6>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between bg-[#3f2866] rounded-xl p-4">
                        <img
                            className="w-[64px] h-[64px]"
                            src="/sunrise.png"
                            alt="sunrise"
                        />
                        <div className="flex flex-col justify-center gap-2">
                            <h6 className="text-sm font-normal">Sunrise</h6>
                            <h3 className="text-xl font-semibold">{sunrise}</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#3f2866] rounded-xl p-4">
                        <img
                            className="w-[64px] h-[64px]"
                            src="/sunset.png"
                            alt="sunset"
                        />
                        <div className="flex flex-col justify-center gap-2">
                            <h6 className="text-sm font-normal">Sunset</h6>
                            <h3 className="text-xl font-semibold">{sunset}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysHighlight;
