'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useWeatherContext from '@/app/context/useWeatherContext';
import { resolve } from 'styled-jsx/css';

const WeatherSearchBar = () => {
    const { setSearchLocation } = useWeatherContext();

    const formik = useFormik({
        initialValues: {
            location: '',
        },
        validationSchema: Yup.object({
            location: Yup.string()
                .max(20, 'Location must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));

            setSearchLocation(values.location.toLocaleLowerCase());
        },
    });

    return (
        <form
            className="relative flex items-center justify-between gap-4 bg-[#341f54] px-6 py-8 mb-6 rounded-2xl shadow-md search-bar-shadow"
            onSubmit={formik.handleSubmit}
        >
            <input
                className="w-full bg-[#3b2264] focus:outline-1 outline-[#422b68]  text-xl rounded-2xl py-3 px-5"
                id="location"
                name="location"
                type="text"
                placeholder="Search for city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
                <div className="absolute bottom-[6px] left-12 text-red-500 shake-x">
                    {formik.errors.location}
                </div>
            ) : null}

            <button
                className="bg-[#40246f] rounded-2xl text-xl cursor-pointer py-3 px-5"
                type="submit"
            >
                {formik.isSubmitting ? 'Searching...' : 'Search'}
            </button>
        </form>
    );
};

export default WeatherSearchBar;
