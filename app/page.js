import WeatherOverview from '@/app/components/WeatherOverview';
import WeatherSearchBar from '@/app/components/WeatherSearchBar';

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10  px-4 sm:px-6 md:px-8 2xl:px-0">
            <WeatherSearchBar />
            <WeatherOverview />
        </main>
    );
}
