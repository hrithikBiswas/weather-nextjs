const CityNotFound = () => {
    return (
        <div className="w-full text-center p-8 rounded-xl overflow-hidden">
            <div className="flex justify-center text-blue-300 text-6xl mb-5 animate-bounce">
                <img
                    className="w-[200px]"
                    src="/CityNotFound.png"
                    alt="City Not Found"
                />
            </div>

            <h1 className="text-8xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                404
            </h1>

            <h2 className="text-2xl font-semibold mb-5 text-slate-200">
                City Not Found
            </h2>
        </div>
    );
};

export default CityNotFound;
