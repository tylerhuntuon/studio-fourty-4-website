import { parse } from "yaml";
import ReactMarkdown from "react-markdown";
import servicesRaw from "../../content/pages/services.yml?raw";

function Services(){

    const servicesContent = parse(servicesRaw) as {
        servicesSection: {
            deluxePedi: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            expressDryPedi: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            biabGelNailExt: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            biabGelOverlay: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            expGelPolColOnl: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            nailRemReap: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            nailRem: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            natNailUp: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }

        };
        extrasSection: {
            nailRepair: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            basicNailArt: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            frenchTip: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            intermediateNailArt: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
            advancedNailArt: {
                heading: string;
                subheading: string;
                body: string;
                time: string;
                image: string;
            }
        };
        
    }

    return (
        <div className="mt-15 px-50">
            <h1 className="text-center text-7xl font-heading text-calacatta pb-3">Services</h1>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.deluxePedi.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.deluxePedi.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.deluxePedi.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.deluxePedi.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expressDryPedi.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expressDryPedi.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expressDryPedi.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expressDryPedi.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelNailExt.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelNailExt.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelNailExt.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelNailExt.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelOverlay.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelOverlay.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelOverlay.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.biabGelOverlay.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expGelPolColOnl.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expGelPolColOnl.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expGelPolColOnl.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.expGelPolColOnl.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRemReap.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRemReap.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRemReap.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRemReap.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRem.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRem.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRem.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.nailRem.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.natNailUp.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.natNailUp.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.natNailUp.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.servicesSection.natNailUp.time}
                        </ReactMarkdown>
                    </div>
                </div>
                
            </div>

            <h1 className="text-center text-7xl font-heading text-calacatta py-5">Extras</h1>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.nailRepair.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.nailRepair.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.nailRepair.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.nailRepair.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.basicNailArt.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.basicNailArt.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.basicNailArt.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.basicNailArt.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.frenchTip.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.frenchTip.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.frenchTip.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.frenchTip.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.intermediateNailArt.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.intermediateNailArt.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.intermediateNailArt.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.intermediateNailArt.time}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="break-inside-avoid bg-calacatta p-5 text-center">
                    <div className="font-heading text-2xl">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.advancedNailArt.heading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-subheading text-lg">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.advancedNailArt.subheading}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-justify">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.advancedNailArt.body}
                        </ReactMarkdown>
                    </div>
                    <div className="font-body text-left text-taupe pt-2">
                        <ReactMarkdown>
                            {servicesContent.extrasSection.advancedNailArt.time}
                        </ReactMarkdown>
                    </div>
                </div>

                
                
            </div>


        </div>
    );
}

export default Services;
