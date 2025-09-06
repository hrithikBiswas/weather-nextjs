import WeatherContextProvider from '@/app/providers/WeatherContextProvider';
import QueryProvider from '@/app/providers/QueryProvider';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Current Weather App',
    description: 'This is real-time weather application',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </Head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <QueryProvider>
                    <WeatherContextProvider>{children}</WeatherContextProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
