import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <div className="relative grid grid-cols-2 w-full h-[800px]">

                <div 
                className="bg-cover bg-center" 
                style={{ backgroundImage: "url('src/assets/images/temp-img4.webp')" }}
                />

                <div 
                className="bg-cover bg-center" 
                style={{ backgroundImage: "url('src/assets/images/temp-img1.webp')" }}
                />

                <div className="absolute inset-0 bg-gray-900/20" />

                <div className="absolute inset-0 flex items-end py-20 px-30">
                    <div className="flex justify-between items-center w-full text-gray-200">

                        <p className="text-4xl font-bold">
                            Blah Blah blah blah blah blah blah blah blah Words
                        </p>

                        <button className="px-6 hover:font-bold underline">
                            Book Now
                        </button>

                    </div>
                </div>

            </div>

            <div className="flex relative w-full bg-gray-800 text-gray-200 justify-center items-center">
                <div className="flex flex-col relative w-200 justify-center items-center gap-4 text-center text-sm/9 pt-15 pb-10">
                    <h1 className="text-3xl font-bold pb-5">
                        Heading or Something
                    </h1>
                    <p>
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                    </p>
                    <p>
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                    </p>

                    <Link
                        to="/about"
                        className="px-3 border border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-gray-800 transition w-30 self-center text-center"
                    >
                        About
                    </Link>
                </div>
            </div>

            <div className="w-full bg-gray-300 text-gray-800 px-16 py-16 text-sm/8">
                <div className="grid grid-cols-3 gap-10 items-center ">
                    <div className="col-span-1">
                        <img src="src/assets/images/temp-img6.webp" />
                    </div>

                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold pb-5">
                            Heading or Something
                        </h1>
                        <h2 className="text-xl font-bold pb-5">
                            Meet the team or Something
                        </h2>
                        <p>
                            Im writing some words to fill in this space so I can see what it looks like when it's full.
                            words words and some more words, gotta fill this space with something so I can get the padding right
                            Im writing some words to fill in this space so I can see what it looks like when it's full.
                            words words and some more words, gotta fill this space with something so I can get the padding right
                            Im writing some words to fill in this space so I can see what it looks like when it's full.
                            words words and some more words, gotta fill this space with something so I can get the padding right
                            Im writing some words to fill in this space so I can see what it looks like when it's full.
                            words words and some more words, gotta fill this space with something so I can get the padding right
                            Im writing some words to fill in this space so I can see what it looks like when it's full.
                        </p>
                        <div className="pt-5">
                            <Link
                                to="/socials"
                                className="px-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition w-30 self-center text-center"
                            >
                                Socials
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;