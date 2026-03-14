import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">

            <h1 className="text-xl font-bold">
                Studio Forty 4
            </h1>

            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/socials">Socials</Link>
                <Link to="/book now">Book Now</Link>
            </div>
            
        </div>
        
    );
}

export default Navbar;

