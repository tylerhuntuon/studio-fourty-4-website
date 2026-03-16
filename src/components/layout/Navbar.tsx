import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-pink-300">

            <h1 className="text-xl font-bold">
                Navbar
            </h1>

            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact">Book Now</Link>
            </div>
            
        </div>
        
    );
}

export default Navbar;

