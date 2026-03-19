import { parse } from "yaml";
import ReactMarkdown from "react-markdown";
import socialsRaw from "../../content/pages/socials.yml?raw";

function Socials(){

    const socialsContent = parse(socialsRaw) as {
        faithSection: {
            faithHeading: string;
            faithAt: string;
            faithBody: string;
            faithImage: string;
        };
        erinSection: {
            erinHeading: string;
            erinAt: string;
            erinBody: string;
            erinImage: string;
        };
    }

    return (
        <div className="bg-onyx pt-7 md:pt-0">
            {/*first section (Faith)*/}

            <div className="relative z-20 grid grid-cols-1 md:grid-cols-5 w-full md:h-[60vh] overflow-hidden">
                <div className="flex h-full bg-onyx text-calacatta md:col-span-2">
                    <div className="flex h-full w-full flex-col justify-center px-12 py-8 md:border-r-2 border-b-2 border-merlot">
                        <div className="text-5xl font-heading text-right">
                            <ReactMarkdown>
                                {socialsContent.faithSection.faithHeading}
                            </ReactMarkdown>
                        </div>

                        <p className="text-lg font-heading pb-3 text-right">
                            {socialsContent.faithSection.faithAt}
                        </p>
                        
                        <div className="font-body text-sm italic leading-6 pl-1/2 text-right">
                            <ReactMarkdown>
                                {socialsContent.faithSection.faithBody}
                            </ReactMarkdown>
                        </div>
                        
                        
                    </div>
                </div>

                <div className="flex h-full min-h-0 bg-onyx items-center justify-center md:col-span-3">
                    <div className="h-4/5 w-4/5 min-h-0 overflow-hidden">
                        <img 
                            src={socialsContent.faithSection.faithImage} 
                            className="block w-full h-full object-contain" 
                        />
                    </div>  
                </div>     
            </div>

            {/*second section (Erin)*/}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-5 w-full overflow-hidden md:h-[60vh]">
                <div className="flex h-full min-h-0 bg-onyx items-center justify-center md:col-span-3">
                    <div className="h-4/5 w-4/5 min-h-0 overflow-hidden">
                        <img 
                            src={socialsContent.erinSection.erinImage} 
                            className="block w-full h-full object-contain" 
                        />
                    </div>  
                </div> 

                <div className="flex h-full bg-onyx text-calacatta border-l-2 border-t-2 border-merlot md:col-span-2 pb-25 md:pb-0">
                    <div className="flex h-full w-full flex-col justify-center px-12 py-8">
                        <div className="text-5xl font-heading text-left">
                            <ReactMarkdown>
                                {socialsContent.erinSection.erinHeading}
                            </ReactMarkdown>
                        </div>

                        <p className="text-lg font-heading pb-3 text-left">
                            {socialsContent.erinSection.erinAt}
                        </p>
                        
                        <div className="font-body text-sm italic leading-6">
                            <ReactMarkdown>
                                {socialsContent.erinSection.erinBody}
                            </ReactMarkdown>
                        </div>
                        
                        
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Socials;
