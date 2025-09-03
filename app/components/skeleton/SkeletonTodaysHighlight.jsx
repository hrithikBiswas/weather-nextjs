import React from 'react';

const SkeletonTodaysHighlight = () => {
    return (
        <div className="animate-pulse max-h-fit col-span-5 lg:col-span-3 bg-[#341f54] rounded-2xl px-4 sm:px-6 py-6 sm:py-8">
            <div className="bg-[#422b68] w-[192px] h-[27.99px] rounded-md mb-5"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-full h-[105px] lg:h-[126px] xl:h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-full h-[105px] lg:h-[126px] xl:h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-full h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-full h-[105px] bg-[#422b68] rounded-xl"></div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="w-full h-[92px] sm:h-full bg-[#3f2866] rounded-xl"></div>
                    <div className="w-full h-[92px] sm:h-full bg-[#3f2866] rounded-xl"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonTodaysHighlight;
