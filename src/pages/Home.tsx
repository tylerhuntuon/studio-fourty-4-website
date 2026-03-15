import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

function Home(){
    return (
        <div>
            {/*first section (side by side picture background)*/}
            <div className="relative grid grid-cols-2 w-full h-[800px] overflow-hidden">
                <Parallax  speed={-20} className="absolute inset-0">
                    <div className="grid grid-cols-2 h-[950px] w-full -translate-y-20">
                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: "url('src/assets/images/temp-img4.webp')" }}
                        />

                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: "url('src/assets/images/temp-img1.webp')" }}
                        />
                    </div>
                    
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/20" />

                <div className="absolute inset-0 flex items-end justify-center py-20 px-30">
                    <div className="flex justify-between items-center w-full max-w-[1200px] text-gray-200">

                        <p className="text-4xl pt-2 font-amoera">
                            Blah Blah blah blah <strong>Words</strong> blah blah blah blah
                        </p>

                        <button className="px-6 pt-2 text-gray-200 font-amoera text-4xl hover:rounded-xs hover:bg-red-950 transition">
                            Book Now
                        </button>

                    </div>
                </div>
            </div>

            {/*second section (Words and about button)*/}
            <div className="flex relative w-full bg-red-950 text-gray-200 justify-center items-center">
                <div className="flex flex-col relative w-200 justify-center items-center gap-4 text-center text-sm/8 pt-15 pb-10">
                    <h1 className="text-5xl font-tropical pb-5">
                        Heading Or Something
                    </h1>
                    <p className="font-caviar text-base italic">
                        Im writing some words to fill in this space so I can see what it looks like when it's full.
                        words words and some more words, gotta fill this space with something so I can get the padding right
                    </p>
                    <p className="font-caviar text-base italic">
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
                        className="border-2 rounded-xs border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-red-950 transition w-40 self-center text-center font-bold"
                    >
                        About
                    </Link>
                </div>
            </div>

            {/*third section (picture and meet the team)*/}
            <div className="w-full bg-red-50 text-red-950 px-16 py-16 text-sm/8">
                <div className="grid grid-cols-3 gap-10 items-center ">
                    <div className="col-span-1">
                        <img src="src/assets/images/temp-img6.webp" />
                    </div>

                    <div className="col-span-2">
                        <h1 className="text-5xl font-hijrnotes pb-5">
                            Heading$
                        </h1>
                        <h2 className="text-xl font-bold pb-3 pt-2 font-tropical">
                            Meet the team or something
                        </h2>
                        <p className="font-caviar text-base italic">
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
                                className="border-2 rounded-xs text-base border-red-950 bg-red-950 text-red-50 hover:bg-red-50 hover:text-red-950 transition w-30 self-center text-center py-1.5 px-10 font-bold"
                            >
                                Socials
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/*fourth section (Gif, slogan and book now)*/}
            <div className="relative w-full h-[600px] overflow-hidden">
                <Parallax speed={-20} className="absolute inset-0">
                    <div 
                        className="h-[700px] w-full bg-cover bg-center"
                        style={{ backgroundImage: "url('src/assets/images/temp.gif')" }}
                    />
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/40" />

                <div className="absolute inset-0 flex items-end justify-center py-10 px-3">
                    <div className="flex flex-col justify-between items-center w-full max-w-[1200px] text-white">

                        <p className="text-6xl font-cherolina py-3">
                            Something. Someone. Somewhere.
                        </p>
                        <Link
                        to="/about"
                        className="border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-red-950 rounded-xs transition w-40 self-center text-center font-bold"
                        >
                            Book Now
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
