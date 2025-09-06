const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const forecastBaseUrl = process.env.NEXT_PUBLIC_FORECAST_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const restcountry = process.env.NEXT_PUBLIC_RESTCOUNTRY_API_URL;

export const fetchWeatherInfo = async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        const res = await fetch(
            `${baseUrl}?q=${query}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) {
            // API responded but with an error (404, 401, 500, etc.)
            throw new Error(res.status);
        }

        return await res.json();
    } catch (error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Usually indicates network issue (disconnected, DNS error, CORS issue, etc.)
            console.error(
                'Network error: Please check your internet connection.'
            );
            throw new Error('ERR_INTERNET_DISCONNECTED');
        } else {
            console.error('Error fetching weather data:', error);
            throw error; // rethrow so caller can handle it
        }
    }
};

export const fetchForecastInfo = async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        const res = await fetch(
            `${forecastBaseUrl}?q=${query}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) {
            // API responded but with an error (404, 401, 500, etc.)
            throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            // Usually indicates network issue (disconnected, DNS error, CORS issue, etc.)
            console.error(
                'Network error: Please check your internet connection.'
            );
            throw new Error(
                'Network error: Unable to connect. Please check your internet.'
            );
        } else {
            console.error('Error fetching weather data:', error);
            throw error; // rethrow so caller can handle it
        }
    }
};
