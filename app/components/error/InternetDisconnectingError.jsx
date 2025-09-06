import React from 'react';

const InternetDisconnectingError = () => {
    return (
        <div className="w-full text-center p-8 rounded-xl overflow-hidden">
            {/* <div className="flex justify-center text-blue-300 text-6xl mb-5 animate-bounce">
                <img
                    className="w-[200px]"
                    src="/No-internet-connection.gif"
                    alt="City Not Found"
                />
            </div> */}

            <h1 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                ERR_INTERNET_DISCONNECTED
            </h1>

            <h2 className="text-2xl font-semibold mb-5 text-slate-200">
                Please check your internet connection and try again.
            </h2>
        </div>
    );
};

export default InternetDisconnectingError;
