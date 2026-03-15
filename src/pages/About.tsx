function About(){
    return (
        <div>
            {/*first section (side by side picture background)*/}
            <div className="relative grid grid-cols-2 w-full h-200 overflow-hidden">
                <div className="flex flex-col bg-red-50 text-red-950 items-center justify-center px-30 border-b-2 border-red-950">
                    <h1 className="text-5xl font-hijrnotes pb-20">
                        Heading$ Again
                    </h1>
                    <p className="font-caviar text-base italic">
                        Talk about your business and stuff
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
                </div>

                <div className="flex bg-red-950 justify-center items-center">
                    <div className="w-4/5 h-4/5 overflow-hidden">
                        <img 
                            src="src/assets/images/temp-img4.webp" 
                            className="w-full h-full object-cover scale-125" 
                        />
                    </div>  
                </div>     
            </div>

            <div className="h-800 bg-red-50 ">

            </div>
        </div>
    );
}

export default About;