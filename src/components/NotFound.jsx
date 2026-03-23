import React from 'react';
import { Link } from 'react-router-dom';
import bgGif from '../assets/bg.gif';

const NotFound = () => {
    return (
        <section className="py-10 bg-l-bg dark:bg-black font-['Arvo'] min-h-screen flex items-center justify-center transition-colors">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full text-center">

                        {/* 404 Background Area */}
                        <div
                            className="bg-center bg-no-repeat h-[500px] w-full"
                            style={{
                                backgroundImage: `url(${bgGif})`,
                            }}
                        >
                            <h1 className="text-[80px] text-l-text-primary dark:text-gray-100 font-bold text-center">404</h1>
                        </div>

                        {/* Content Box */}
                        <div className="-mt-[50px]">
                            <h3 className="text-[32px] md:text-[40px] text-l-text-primary dark:text-gray-100 font-normal mb-2">Look like you're lost</h3>

                            <p className="text-l-text-secondary dark:text-gray-text text-lg mb-6">the page you are looking for not avaible!</p>

                            <Link
                                to="/"
                                className="inline-block py-[10px] px-[20px] bg-l-accent text-white rounded transition-all hover:bg-l-accent-hover shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Go to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
