import WeatherOverview from '@/app/components/WeatherOverview';
import WeatherSearchBar from '@/app/components/WeatherSearchBar';

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto py-10">
            <WeatherSearchBar />
            <WeatherOverview />
        </main>
    );
}
