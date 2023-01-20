import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { createUser, updateUserProfile, verifyEmail, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, password);

        // SignUp
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // handleUpdateUserProfile(name, photoURL);
                // handleEmailVerification();

                // verify email toaste
                // toast.success('Please verify email before login')
                navigate('/login');
            })
            .catch(error => {

                if (error.code === "auth/email-already-in-use") {
                    setError("The email address is already in use.");

                } else if (error.code === "auth/invalid-email") {
                    setError("The email address is not valid.");

                } else if (error.code === "auth/operation-not-allowed") {
                    setError("Operation not allowed.");
                } else if (error.code === "auth/weak-password") {
                    setError("The password is too weak. Password should be at least 6 characters.");
                }
                else {
                    setError(error.message);
                }
                console.error('error', error);
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                if (error.code === "auth/popup-closed-by-user") {
                    setError("PopUp closed by user.");
                } 
                else {
                    setError(error.message);
                }
                console.error(error);
            })
    }


    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a lazy dog
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign up for updates
                                </h3>


                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            First name
                                        </label>
                                        <input
                                            placeholder="John"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="lastName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            placeholder="Doe"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lastName"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>

                                    <span className='text-red-500'>{error}</span>


                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Sign Up
                                        </button>
                                    </div>

                                    {/* <p className="text-xs text-gray-600 sm:text-sm">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p> */}
                                </form>


                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gray-50 hover:bg-gray-200 focus:shadow-outline focus:outline-none"
                                    >
                                        <FcGoogle className='text-xl mr-3'></FcGoogle> Sign in with Google
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;