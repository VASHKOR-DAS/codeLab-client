import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const freeCourse = useLoaderData();

    return (
        <>
            <div id='courses' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                        <a href="/" aria-label="Item" className="mr-3">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                            <span className="inline-block mb-2">The brown fox</span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                        </h2>
                    </div>
                    <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
                        "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
                        accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
                        perspiciatis unde omnis iste."
                    </p>
                </div>

                <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">

                    {
                        freeCourse.map((course, index) => {
                            const { _id, courseName, image, category, details } = course;
                            return (

                                <Link to={`/course/${_id}`}>
                                    <div key={index} className='shadow-sm shadow-gray-400 bg-white rounded hover:shadow-lg hover:shadow-gray-400 hover:cursor-pointer transition duration-200'>
                                        <img
                                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                                            src={image}
                                            alt=""
                                        />
                                        <div className='mx-5 pb-5'>
                                            <div className='flex justify-between'>
                                                <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                                    {courseName}
                                                </p>
                                                <span className='text-xl text-red-500 italic font-extrabold leading-none sm:text-2xl'>{category}</span>
                                            </div>
                                            <p className="text-gray-700">
                                                {
                                                    details.length > 80 ?
                                                        <>
                                                            {details.slice(0, 80) + '...'}
                                                        </>
                                                        : details
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })
                    }

                </div>



                <div className="text-center">
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>

            </div>
        </>
    );
};

export default Courses;