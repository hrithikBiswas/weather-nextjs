import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    TimestampDetails,
    formattedTemperature,
} from '@/app/utils/weatherUtils';

function ForecastList({ forecastWeatherInfo }) {
    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={12}
            pagination={{
                clickable: false,
            }}
            modules={[]}
            className="mySwiper mt-5"
        >
            {forecastWeatherInfo?.list?.map((forecast, index) => {
                const { hour, shortDayName } = TimestampDetails(forecast?.dt);

                return (
                    <SwiperSlide
                        className="text-center max-w-[60px]"
                        key={index}
                    >
                        <span>{hour}</span>
                        <div className="flex flex-col justify-center items-center gap-1 bg-[#422b68] rounded-xl p-4 mt-1">
                            <span>{shortDayName}</span>
                            <Image
                                src={`http://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png`}
                                alt="weather icon"
                                width={50}
                                height={50}
                            />
                            <div className="flex gap-1">
                                <span>
                                    {formattedTemperature(
                                        forecast?.main?.temp,
                                        'current'
                                    )}
                                    °C
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ForecastList;
