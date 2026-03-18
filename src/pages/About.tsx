import { Parallax } from "react-scroll-parallax";
import { parse } from "yaml";
import ReactMarkdown from "react-markdown";
import aboutRaw from "../../content/pages/about.yml?raw";

const galleryFiles = import.meta.glob("../../content/gallery/*.{yml,yaml,md}", {
    eager: true,
    query: "?raw",
    import: "default",
});

type AboutContent = {
    heroHeading: string;
    heroText: string;
    heroImage: string;
};

type GalleryItem = {
    image: string;
    alt?: string;
    order?: number;
};

function About(){
    const aboutContent = parse(aboutRaw) as AboutContent;

    const galleryImages = Object.values(galleryFiles)
        .map((file) => {
            const raw = (file as string).trim();
            const frontmatter = raw.startsWith("---")
                ? raw.replace(/^---\s*[\r\n]+/, "").replace(/[\r\n]+---\s*$/, "")
                : raw;

            return parse(frontmatter) as GalleryItem;
        })
        .filter((item) => item.image)
        .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

    return (
        <div className="bg-calacatta">
            <div className="bg-taupe h-14" />

            {/*first section (side by side picture background)*/}
            <Parallax speed={-3} startScroll={100} endScroll={800} className="relative z-20">
                <div className="relative grid grid-cols-1 md:grid-cols-2 w-full md:h-[60vh] translate-y-7 z-20">
                    <div className="flex h-full bg-calacatta text-onyx border-b-2 border-taupe">
                        <div className="flex h-full w-full flex-col justify-center px-12 py-8 items-center">
                            <div className="text-5xl font-heading pb-10">
                                <ReactMarkdown>
                                    {aboutContent.heroHeading}
                                </ReactMarkdown>
                            </div>
                            <div className="font-body text-sm italic leading-6 text-right">
                                <ReactMarkdown>
                                    {aboutContent.heroText}
                                </ReactMarkdown>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="flex h-full min-h-0 bg-taupe items-center justify-center">
                        <div className="h-4/5 w-4/5 min-h-0 overflow-hidden">
                            <img 
                                src={aboutContent.heroImage} 
                                className="block w-full h-full object-contain" 
                            />
                        </div>  
                    </div>     
                </div>
            </Parallax>
            

            {/*second section (Gallery of Photos) */}
            <div className="flex bg-calacatta py-10 justify-center items-center px-4 translate-y-7 relative z-0">
                <div className="grid w-full max-w-300 grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((item, index) => (
                        <div key={`${item.image}-${index}`} className="aspect-square w-full overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.alt ?? `Gallery image ${index + 1}`}
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
