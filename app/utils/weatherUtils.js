export function TimestampDetails(timestamp, options = {}) {
    const { locale = 'en-BD' } = options;

    const date = new Date(timestamp * 1000);

    const formattedDate = date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const time = date.toLocaleTimeString(locale, {
        hour12: true, // 12-hour format
        hour: '2-digit',
        minute: '2-digit',
    });

    const dayName = date.toLocaleDateString(locale, { weekday: 'long' });
    const shortDayName = date.toLocaleDateString(locale, { weekday: 'short' });

    const hour = date.toLocaleTimeString(locale, {
        hour12: true,
        hour: 'numeric',
    });

    return {
        formattedDate,
        time,
        dayName,
        shortDayName,
        hour,
    };
}

export const convertMetersToKilometers = (meters) => {
    const kilometers = meters / 1000;
    const formattedValue = Number.parseFloat(kilometers).toFixed(2);

    // Check if decimal part is "00"
    if (formattedValue.endsWith('.00')) {
        return kilometers >= 0 ? Math.ceil(kilometers) : Math.floor(kilometers);
    }

    return formattedValue;
};
