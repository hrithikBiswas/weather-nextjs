import React from 'react';

const SkeletonTodaysHighlight = () => {
    return (
        <div className="animate-pulse max-h-fit col-span-3 bg-[#341f54] rounded-2xl px-6 py-8">
            <div className="bg-[#422b68] w-[192px] h-[27.99px] rounded-md mb-5"></div>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-[144.9px] h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-[144.9px] h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-[144.9px] h-[105px] bg-[#422b68] rounded-xl"></div>
                    <div className="w-[144.9px] h-[105px] bg-[#422b68] rounded-xl"></div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#3f2866] rounded-xl"></div>
                    <div className="bg-[#3f2866] rounded-xl "></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonTodaysHighlight;
