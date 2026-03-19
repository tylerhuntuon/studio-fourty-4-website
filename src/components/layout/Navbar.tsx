import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isDarkPage = location.pathname !== "/";
    const useDarkMenuText = location.pathname === "/about";
    const isSocialsPage = location.pathname === "/socials";
    const isServicesPage = location.pathname === "/services";
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`absolute top-0 left-0 z-50 w-full px-6 py-4 ${isDarkPage ? "text-calacatta" : "text-onyx"}`}>
            <div className="flex items-center justify-between">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={isDarkPage ? "src/assets/logo/PRIMARY LOGO - CALACATTA.svg" : "src/assets/logo/PRIMARY LOGO - ONYX.svg"} className="w-60" />
                </NavLink>
                

                <div className="hidden md:flex gap-6 font-subheading">
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Services</NavLink>
                    <NavLink to="/socials" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Socials</NavLink>
                    <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
                </div>

                <div className="relative md:hidden">
                    <button
                        className={`text-2xl leading-none ${isDarkPage ? "text-calacatta" : "text-onyx"}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        &#9776;
                    </button>

                    <div 
                        className={`absolute right-0 top-full mt-3 flex w-29 px-5 flex-col items-center gap-3 text-center font-subheading transition-all duration-300 rounded-bl-lg translate-x-6 py-2 ${
                            useDarkMenuText ? "text-calacatta bg-linear-to-b from-taupe to-taupe/75" : "text-calacatt"
                        } ${
                            menuOpen
                                ? "translate-y-0 scale-100 opacity-100"
                                : "-translate-y-2 scale-95 opacity-0 pointer-events-none"
                        } ${
                            isDarkPage ? "text-calacatta" : "text-onyx bg-onyx/0"
                        } ${
                            isSocialsPage ? "bg-linear-to-b from-onyx via-onyx to-onyx/80" : ""
                        } ${
                            isServicesPage ? "bg-onyx/80 rounded-l-xl" : ""
                        } z-50`}
                    >
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Home</NavLink>
                        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>About</NavLink>
                        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Services</NavLink>
                        <NavLink to="/socials" onClick={closeMenu} className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Socials</NavLink>
                        <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" onClick={closeMenu} className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>Book Now</NavLink>
                    </div>
                </div>
            </div>
        </div>

        
        
    );
}

export default Navbar;

