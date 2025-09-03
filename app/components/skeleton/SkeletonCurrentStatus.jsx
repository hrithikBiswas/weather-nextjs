import React from 'react';

const SkeletonCurrentStatus = () => {
    return (
        <div className="animate-pulse max-h-fit col-span-5 lg:col-span-2 bg-[#341f54]  rounded-2xl px-4 sm:px-6 py-6 sm:py-8">
            <div className="w-[109.71px] h-[28px] bg-[#422b68] rounded-lg mb-4"></div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                    <div className="bg-[#422b68] w-[170px] h-[80.5px] rounded-md"></div>
                    <div className="bg-[#422b68] w-[134.79px] h-[80.5px] rounded-md"></div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="bg-[#422b68] w-[120px] h-[120px] rounded-md"></div>
                    <div className="bg-[#422b68] w-[122.19px] h-[48.99px] rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCurrentStatus;
