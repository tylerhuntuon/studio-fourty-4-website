import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { parse } from "yaml";
import ReactMarkdown from "react-markdown";
import homeRaw from "../../content/pages/home.yml?raw";

function Home(){

    const homeContent = parse(homeRaw) as {
        heroSection: {
            heroHeading: string;
            bookNowButton: string;
            heroImageLeft: string;
            heroImageRight: string;
        };
        introSection: {
            introHeading: string;
            introParagraph1: string;
            introParagraph2: string;
            aboutButton: string;
        };
        meetTeamSection: {
            meetTeamHeading: string;
            meetTeamSubHeading: string;
            meetTeamParagraph: string;
            socialsButton: string;
            meetTheTeamImage: string;
        };
        sloganSection: {
            finalSlogan: string;
            finalBookNowButton: string;
            finalGif: string;
        };
    }


    return (
        <div>
            {/*first section (side by side picture background)*/}
            <div className="relative grid grid-cols-2 w-full h-200 overflow-hidden">
                <Parallax  speed={-20} className="absolute inset-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-237.5 w-full -translate-y-20">
                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: `url(${homeContent.heroSection.heroImageLeft})` }}
                        />

                        <div 
                            className="bg-cover bg-center" 
                            style={{ backgroundImage: `url(${homeContent.heroSection.heroImageRight})` }}
                        />
                    </div>
                    
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/20" />

                <div className="absolute inset-0 flex items-end justify-center px-3 py-10 md:py-20 md:px-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full max-w-full md:max-w-300 text-calacatta">
                        <div  className="text-4xl text-creme pt-2 font-heading pb-10 md:pb-0">
                            <ReactMarkdown>
                                {homeContent.heroSection.heroHeading}
                            </ReactMarkdown>
                        </div>
                        

                        <Link 
                            to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig"
                            className="text-right"    
                        >
                            <button 
                                className="pt-2 px-2 text-4xl text-right text-creme font-heading border-2 border-transparent rounded-none transition-all duration-300 hover:rounded-xs hover:border-calacatta"
                            >
                                <ReactMarkdown>
                                    {homeContent.heroSection.bookNowButton}
                                </ReactMarkdown>
                            </button>
                        </Link>
                        

                    </div>
                </div>
            </div>

            {/*second section (Words and about button)*/}
            <div className="flex relative w-full bg-taupe text-calacatta justify-center items-center">
                <div className="flex flex-col relative px-5 md:w-200 justify-center items-center gap-4 text-center text-sm/8 pt-15 pb-10">
                    <div className="text-5xl font-heading pb-5">
                        <ReactMarkdown>
                            {homeContent.introSection.introHeading}
                        </ReactMarkdown>
                    </div>
                    
                    <div className="font-caviar text-body italic">
                        <ReactMarkdown>
                            {homeContent.introSection.introParagraph1}
                        </ReactMarkdown>
                    </div>
                    

                    <Link
                        to="/about"
                        className="border-2 font-feature rounded-xs border-calacatta text-calacatta hover:bg-calacatta hover:text-merlot transition w-40 self-center text-center font-bold"
                    >
                        <ReactMarkdown>
                            {homeContent.introSection.aboutButton}
                        </ReactMarkdown>
                    </Link>
                </div>
            </div>

            {/*third section (picture and meet the team)*/}
            <div className="w-full bg-creme text-onyx md:px-16 px-5 py-16 text-sm/8">
                <div className="grid md:grid-cols-3 gap-10 items-center justify-center">
                    <div className="">
                        <img src={homeContent.meetTeamSection.meetTheTeamImage} />
                    </div>

                    <div className="md:col-span-2">
                        <div className="text-5xl font-heading">
                            <ReactMarkdown>
                                {homeContent.meetTeamSection.meetTeamHeading}
                            </ReactMarkdown>
                        </div>
                        <div className="text-xl font-bold pb-10 pt-2 font-subheading">
                            <ReactMarkdown>
                                {homeContent.meetTeamSection.meetTeamSubHeading}
                            </ReactMarkdown>
                        </div>
                        <div className="font-caviar text-body italic">
                            <ReactMarkdown>
                                {homeContent.meetTeamSection.meetTeamParagraph}
                            </ReactMarkdown>
                        </div>
                        
                        <div className="border-2 rounded-xs font-feature text-base border-merlot bg-merlot text-creme hover:bg-creme hover:text-merlot transition w-30 self-center text-center py-1.5 mt-5 font-bold">
                            <Link to="/socials">
                                <ReactMarkdown>
                                    {homeContent.meetTeamSection.socialsButton}
                                </ReactMarkdown>
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
                        style={{ backgroundImage: `url(${homeContent.sloganSection.finalGif})` }}
                    />
                </Parallax>
                

                <div className="absolute inset-0 bg-gray-900/40" />

                <div className="absolute inset-0 flex items-end justify-center py-10 px-3">
                    <div className="flex flex-col justify-between items-center w-full max-w-300 text-white">
                        <div className="md:text-6xl text-4xl font-cherolina py-3">
                            <ReactMarkdown>
                                {homeContent.sloganSection.finalSlogan}
                            </ReactMarkdown>
                        </div>
                        <Link
                        to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig"
                        className="border-2 font-feature border-calacatta text-calacatta hover:bg-calacatta hover:text-merlot rounded-xs transition w-40 self-center text-center font-bold"
                        >
                            <ReactMarkdown>
                                {homeContent.sloganSection.finalBookNowButton}
                            </ReactMarkdown>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
