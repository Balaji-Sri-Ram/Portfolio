import React from 'react';
import { Link } from 'react-router-dom';
import bgGif from '../assets/bg.gif';

const NotFound = () => {
    return (
        <section className="py-10 bg-white font-['Arvo'] min-h-screen flex items-center justify-center">
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
                            <h1 className="text-[80px] text-black font-bold text-center">404</h1>
                        </div>

                        {/* Content Box */}
                        <div className="-mt-[50px]">
                            <h3 className="text-[32px] md:text-[40px] text-black font-normal mb-2">Look like you're lost</h3>

                            <p className="text-black text-lg mb-6">the page you are looking for not avaible!</p>

                            <Link
                                to="/"
                                className="inline-block py-[10px] px-[20px] bg-[#39ac31] text-white rounded transition-all hover:bg-[#2d8a26]"
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
