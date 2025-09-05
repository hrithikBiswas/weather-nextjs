import React from 'react';

const SkeletonForecast = () => {
    return (
        <div className="animate-pulse max-h-fit mt-5">
            <ul className="flex gap-[12px] overflow-hidden">
                {Array.from({ length: 15 }).map((_, index) => (
                    <li className="flex flex-col items-center" key={index}>
                        <span className="w-[40.46px] h-[16px] bg-[#422b68] rounded-sm mb-2"></span>
                        <div className="w-[60px] h-[109px] rounded-xl bg-[#422b68]"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkeletonForecast;
