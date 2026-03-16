import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import image7 from "../assets/images/image7.webp";
import image8 from "../assets/images/image8.webp";
import image9 from "../assets/images/image9.webp";
import gifHero from "../assets/images/temp.gif";

function Home(){
    return (
        <div>
            {/*first section (side by side picture background)*/}
            <div className="relative grid grid-cols-2 w-full h-200 overflow-hidden">
                <Parallax  speed={-20} className="absolute inset-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-237.5 w-full -translate-y-20">
                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image8})` }}
                        />

                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image7})` }}
                        />
                    </div>
                    
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/20" />

                <div className="absolute inset-0 flex items-end justify-center md:py-20 md:px-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full max-w-full md:max-w-300 text-calacatta">

                        <p className="text-4xl pt-2 font-amoera pb-10 md:pb-0">
                            Blah Blah blah blah <strong>Words</strong> blah blah blah blah
                        </p>

                        <Link 
                            to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig"
                            className="text-right"    
                        >
                            <button 
                                className="pt-2 text-calacatta font-amoera text-4xl text-right hover:rounded-xs hover:bg-merlot transition"
                                >
                                Book Now
                            </button>
                        </Link>
                        

                    </div>
                </div>
            </div>

            {/*second section (Words and about button)*/}
            <div className="flex relative w-full bg-taupe text-calacatta justify-center items-center">
                <div className="flex flex-col relative px-5 md:w-200 justify-center items-center gap-4 text-center text-sm/8 pt-15 pb-10">
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
                        className="border-2 rounded-xs border-calacatta text-calacatta hover:bg-calacatta hover:text-merlot transition w-40 self-center text-center font-bold"
                    >
                        About
                    </Link>
                </div>
            </div>

            {/*third section (picture and meet the team)*/}
            <div className="w-full bg-creme text-onyx px-16 py-16 text-sm/8">
                <div className="grid grid-cols-3 gap-10 items-center ">
                    <div className="col-span-1">
                        <img src={image9} />
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
                                className="border-2 rounded-xs text-base border-merlot bg-merlot text-creme hover:bg-creme hover:text-merlot transition w-30 self-center text-center py-1.5 px-10 font-bold"
                            >
                                Socials
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/*fourth section (Gif, slogan and book now)*/}
            <div className="relative w-full h-150 overflow-hidden">
                <Parallax speed={-20} className="absolute inset-0">
                    <div 
                        className="h-175 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${gifHero})` }}
                    />
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/40" />

                <div className="absolute inset-0 flex items-end justify-center py-10 px-3">
                    <div className="flex flex-col justify-between items-center w-full max-w-300 text-white">

                        <p className="text-6xl font-cherolina py-3">
                            Something. Someone. Somewhere.
                        </p>
                        <Link
                        to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig"
                        className="border-2 border-calacatta text-calacatta hover:bg-calacatta hover:text-merlot rounded-xs transition w-40 self-center text-center font-bold"
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
