const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const restcountry = process.env.NEXT_PUBLIC_RESTCOUNTRY_API_URL;

export const fetchWeatherInfo = async (searchLocation) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        const res = await fetch(
            `${baseUrl}?q=${searchLocation}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) {
            throw new Error('Failed to fetch weather data');
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const fetchCountryName = async (countryCode) => {
    try {
        const res = await fetch(`${restcountry}/${countryCode}`);
        if (!res.ok) {
            throw new Error('Failed to fetch country name');
        }
        const data = await res.json();
        return data[0].name.common;
    } catch (error) {
        console.error('Error fetching country name:', error);
        throw error;
    }
};
