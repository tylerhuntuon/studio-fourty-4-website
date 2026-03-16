<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
>>>>>>> 0c08033fd2eb85cadad821dd4186f53fe0e207ea

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    return (
        <div className={`absolute top-0 left-0 z-10 w-full px-6 py-4 ${isAboutPage ? "text-calacatta" : "text-onyx"}`}>
            <div className="flex items-center justify-between">
                <h1 className="text-7xl font-cherolina">
                    StudioForty4
                </h1>

                <div className="hidden md:flex gap-6 font-amoera font-bold">
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Services</NavLink>
                    <NavLink to="/socials" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Socials</NavLink>
                    <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
                </div>

<<<<<<< HEAD
            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact">Book Now</Link>
=======
                <div className="relative md:hidden">
                    <button
                        className={`text-2xl leading-none ${isAboutPage ? "text-calacatta" : "text-onyx"}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        &#9776;
                    </button>

                    <div 
                        className={`absolute right-0 top-full mt-3 flex w-fit min-w-32 flex-col items-end gap-4 text-right font-amoera font-bold transition-all duration-300 ${
                            isAboutPage ? "text-onyx" : "text-onyx"
                        } ${
                            menuOpen
                                ? "translate-y-0 scale-100 opacity-100"
                                : "-translate-y-2 scale-95 opacity-0 pointer-events-none"
                        }`}
                    >
                        <NavLink to="/" className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>About</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>Services</NavLink>
                        <NavLink to="/socials" className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>Socials</NavLink>
                        <NavLink to="https://www.fresha.com/a/studioforty4-erina-206-the-entrance-road-fe15fhse/all-offer?menu=true&share=true&pId=1032092&utm_content=link_in_bio&utm_medium=social&utm_source=ig" className={({ isActive }) => isActive ? "hidden" : "hover:underline underline-offset-4"}>Book Now</NavLink>
                    </div>
                </div>
>>>>>>> 0c08033fd2eb85cadad821dd4186f53fe0e207ea
            </div>
        </div>

        
        
    );
}

export default Navbar;

