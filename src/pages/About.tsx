import { Parallax } from "react-scroll-parallax";
import image10 from "../assets/images/image10.webp";

function About(){
    const galleryImages = Object.values(
        import.meta.glob("../assets/gallery/*.{webp,png,jpg,jpeg}", {
            eager: true,
            import: "default",
        })
    ) as string[];

    return (
        <div className="bg-calacatta">
            <div className="bg-taupe h-25" />

            {/*first section (side by side picture background)*/}
            <Parallax speed={-3} startScroll={100} endScroll={800} className="inset-0">
                <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 w-full md:h-[60vh] overflow-hidden translate-y-7">
                    <div className="flex h-full bg-calacatta text-onyx border-b-2 border-taupe">
                        <div className="flex h-full w-full flex-col justify-center px-12 py-8 items-center">
                            <h1 className="text-5xl font-hijrnotes pb-10">
                                Heading$ Again
                            </h1>
                            
                            <p className="font-caviar text-sm italic leading-6 pl-1/2 text-right">
                                Talk about your business and stuff
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                                Im writing some words to fill in this space so I can see what it looks like when it's full.
                            </p>
                            
                        </div>
                    </div>

                    <div className="flex h-full min-h-0 bg-taupe items-center justify-center">
                        <div className="h-4/5 w-4/5 min-h-0 overflow-hidden">
                            <img 
                                src={image10} 
                                className="block w-full h-full object-contain" 
                            />
                        </div>  
                    </div>     
                </div>
            </Parallax>
            

            {/*second section (Gallery of Photos) */}
            <div className="flex bg-calacatta py-10 justify-center items-center px-4 translate-y-7 relative z-10">
                <div className="grid w-full max-w-300 grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <div key={image} className="aspect-square w-full overflow-hidden">
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
