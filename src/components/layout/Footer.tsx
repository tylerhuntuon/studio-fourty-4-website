import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "studioforty4official@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/studioforty4official/";

function Footer(){
    const [contactMenuOpen, setContactMenuOpen] = useState(false);
    const contactMenuRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const overlapsPage = location.pathname === "/socials";

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                contactMenuRef.current &&
                !contactMenuRef.current.contains(event.target as Node)
            ) {
                setContactMenuOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setContactMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className={`relative z-30 w-full flex justify-between items-center px-6 py-4 ${overlapsPage ? "-mt-30 md:-mt-23 text-calacatta" : "bg-taupe text-onyx"}`}>
            <NavLink to="/">
                <img 
                    src={overlapsPage ? "src/assets/logo/SECONDARY LOGO - CALACATTA.svg" : "src/assets/logo/SECONDARY LOGO - ONYX.svg"} 
                    className="hidden md:block w-30" 
                />
                <img 
                    src={overlapsPage ? "src/assets/logo/MONOGRAM - CALACATTA.svg" : "src/assets/logo/MONOGRAM - ONYX.svg"} 
                    className="block md:hidden w-5" 
                />
            </NavLink>
            

            <p className="font-body text-sm border-l px-4 mx-4 mr-auto">
                Shop 2<br />206 The Entrance Road<br />Erina 2550
            </p>

            <div className="relative flex gap-6 font-subheading text-sm" ref={contactMenuRef}>
                <div>
                    <button
                        type="button"
                        className="hover:underline underline-offset-4"
                        onClick={() => setContactMenuOpen((open) => !open)}
                        aria-expanded={contactMenuOpen}
                        aria-haspopup="menu"
                    >
                        Contact
                    </button>

                    <div
                        className={`absolute -right-6 bottom-full z-40 mb-9 flex w-29 flex-col items-center gap-3 text-center font-subheading transition-all duration-300 rounded-tl-lg py-2 ${
                            overlapsPage
                                ? "text-calacatta bg-linear-to-t from-onyx to-onyx/75 rounded-bl-lg"
                                : "text-onyx bg-linear-to-t from-taupe to-taupe/75"
                        } ${
                            contactMenuOpen
                                ? "translate-y-0 scale-100 opacity-100"
                                : "translate-y-2 scale-95 opacity-0 pointer-events-none"
                        }`}     
                    >
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="hover:underline underline-offset-4"
                            onClick={() => setContactMenuOpen(false)}
                        >
                            Email
                        </a>
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 hover:underline underline-offset-4"
                            onClick={() => setContactMenuOpen(false)}
                        >
                            Instagram
                        </a>
                        <a>

                        </a>
                    </div>
                </div>
                <NavLink to="/policy" className={({ isActive }) => isActive ? "underline-offset-4" : "hover:underline underline-offset-4"}>Policy</NavLink>
                <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" className={({ isActive }) => isActive ? "underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
            </div>
            
        </div>
        
    );
}

export default Footer;
