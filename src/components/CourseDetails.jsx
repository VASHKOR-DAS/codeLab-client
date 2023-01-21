import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const courseDetail = useLoaderData();
    console.log(courseDetail);

    const { courseName, image, category, details } = courseDetail;

    return (
        <div className="max-w-lg mx-auto py-20">

            <div className='shadow-sm shadow-gray-400 bg-white rounded hover:shadow-lg hover:shadow-gray-400 hover:cursor-pointer transition duration-200'>
                <img
                    className="object-cover w-full"
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
                        {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;