import { parse } from "yaml";
import ReactMarkdown from "react-markdown";

function Policy(){

    const policyFiles = import.meta.glob("../../content/policy/*.{yml,yaml,md}", {
        eager: true,
        query: "?raw",
        import: "default",
    });

    type PolicyItem = {
        heading: string;
        bodyContent: string;
    };

    const policyContent = Object.values(policyFiles)
            .map((file) => {
                const raw = (file as string).trim();
                const frontmatter = raw.startsWith("---")
                    ? raw.replace(/^---\s*[\r\n]+/, "").replace(/[\r\n]+---\s*$/, "")
                    : raw;
    
                return parse(frontmatter) as PolicyItem;
            })
            .filter((item) => item.heading);

  return(
    <div className="bg-calacatta min-h-screen px-6 py-16 mt-15 md:px-12 xl:px-24">
        <div className="mx-auto max-w-5xl">
            <h1 className="pb-10 text-center font-heading text-5xl text-onyx md:text-6xl">
                Policy
            </h1>

            <div className="grid gap-6">
                {policyContent.map((item, index) => (
                    <section
                        key={`${item.heading}-${index}`}
                        className="border-2 border-taupe bg-creme/70 p-6 text-onyx"
                    >
                        <h2 className="border-b-2 border-taupe pb-3 font-heading text-3xl">
                            {item.heading}
                        </h2>
                        <div className="pt-4 font-body text-sm italic leading-7">
                            <ReactMarkdown>
                                {item.bodyContent}
                            </ReactMarkdown>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Policy;
