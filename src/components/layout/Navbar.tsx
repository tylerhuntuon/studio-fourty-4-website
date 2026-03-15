import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">

            <h1 className="text-7xl font-cherolina">
                StudioForty4
            </h1>

            <div className="flex gap-6 font-amoera font-bold">
                <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Services</NavLink>
                <NavLink to="/socials" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Socials</NavLink>
                <NavLink to="/book now" className={({ isActive }) => isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"}>Book Now</NavLink>
            </div>
            
        </div>
        
    );
}

export default Navbar;

